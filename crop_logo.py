from PIL import Image

# Load the image
img = Image.open("public/De'Caves_logo.webp").convert("RGBA")
width, height = img.size

# Find non-transparent pixels with a threshold
pixels = img.load()
y_coords = []
x_coords = []
for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        if a > 50:  # Threshold to ignore noise
            y_coords.append(y)
            x_coords.append(x)

if not y_coords:
    print("No non-transparent pixels found")
    exit()

min_y, max_y = min(y_coords), max(y_coords)

# Find the gap
row_alpha = []
for y in range(min_y, max_y + 1):
    alpha_sum = sum(1 for x in range(width) if pixels[x, y][3] > 50)
    row_alpha.append(alpha_sum)

in_object = False
first_object_bottom = -1
for i, count in enumerate(row_alpha):
    y = min_y + i
    if count > 0:
        in_object = True
    elif in_object and count == 0:
        # Require a gap of at least a few pixels to be sure
        if all(c == 0 for c in row_alpha[i:i+5]):
            first_object_bottom = y
            break

if first_object_bottom == -1:
    print("No gap found, cropping top 60%")
    first_object_bottom = min_y + int((max_y - min_y) * 0.6)

print(f"Top object ends at row {first_object_bottom}")

# Filter coordinates for top object
top_x_coords = [x for x, y in zip(x_coords, y_coords) if y < first_object_bottom]

top = min_y
bottom = first_object_bottom
left = min(top_x_coords)
right = max(top_x_coords)

print(f"Bounding box: {left}, {top}, {right}, {bottom}")

# Crop and make it square with some padding
box_width = right - left
box_height = bottom - top
size = int(max(box_width, box_height) * 1.2)
square_img = Image.new("RGBA", (size, size), (255, 255, 255, 0))
icon = img.crop((left, top, right, bottom))
paste_x = (size - box_width) // 2
paste_y = (size - box_height) // 2
square_img.paste(icon, (paste_x, paste_y))

# Save as PNG first, then ICO just in case
square_img.save("public/icon.png")
print("Saved public/icon.png")
