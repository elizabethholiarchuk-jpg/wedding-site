#!/bin/bash

# Script to organize wedding images into folders
# This script will copy images from public/images to the wedding folders

echo "Organizing wedding images into folders..."

# Create wedding folders
mkdir -p public/w01-hamburg-civil
mkdir -p public/w02-berlin-church
mkdir -p public/w03-forest-party

# Wedding 1: Hamburg Civil Ceremony (13 images)
wedding1=(
  "735A7443.jpg"
  "735A6033.jpg"
  "735A5074.jpg"
  "735A6066.jpg"
  "735A5740.jpg"
  "735A5893.jpg"
  "735A6091.jpg"
  "735A5000.jpg"
  "735A5045.jpg"
  "735A5164.jpg"
  "735A4121.jpg"
  "735A5725.jpg"
  "hero.jpg"
)

# Wedding 2: Berlin Church Wedding (13 images)
wedding2=(
  "735A3759.jpg"
  "735A3915.jpg"
  "735A3934.jpg"
  "735A3953.jpg"
  "735A3957.jpg"
  "735A3965.jpg"
  "735A3974.jpg"
  "735A4009.jpg"
  "735A4065.jpg"
  "735A4705.jpg"
  "735A5753.jpg"
  "735A5955.jpg"
  "735A6550.jpg"
)

# Wedding 3: Forest Celebration (13 images)
wedding3=(
  "735A4890.jpg"
  "735A4910.jpg"
  "735A4923.jpg"
  "735A5037.jpg"
  "735A5087.jpg"
  "735A5186.jpg"
  "735A5234.jpg"
  "735A5249.jpg"
  "735A5328-2.jpg"
  "735A5434-3.jpg"
  "735A5444.jpg"
  "735A6612.jpg"
  "735A7476.jpg"
)

# Copy and rename Wedding 1 images
echo "Processing Wedding 1: Hamburg Civil Ceremony..."
counter=1
for img in "${wedding1[@]}"; do
  num=$(printf "%02d" $counter)
  cp "public/images/$img" "public/w01-hamburg-civil/${num}.jpg"
  echo "  Copied $img -> ${num}.jpg"
  ((counter++))
done

# Copy and rename Wedding 2 images
echo "Processing Wedding 2: Berlin Church Wedding..."
counter=1
for img in "${wedding2[@]}"; do
  num=$(printf "%02d" $counter)
  cp "public/images/$img" "public/w02-berlin-church/${num}.jpg"
  echo "  Copied $img -> ${num}.jpg"
  ((counter++))
done

# Copy and rename Wedding 3 images
echo "Processing Wedding 3: Forest Celebration..."
counter=1
for img in "${wedding3[@]}"; do
  num=$(printf "%02d" $counter)
  cp "public/images/$img" "public/w03-forest-party/${num}.jpg"
  echo "  Copied $img -> ${num}.jpg"
  ((counter++))
done

echo ""
echo "✅ Image organization complete!"
echo ""
echo "Wedding folders created:"
echo "  - public/w01-hamburg-civil (13 images)"
echo "  - public/w02-berlin-church (13 images)"
echo "  - public/w03-forest-party (13 images)"
