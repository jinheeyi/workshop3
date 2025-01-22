Website link:https://jinheeyi.github.io/workshop3/

## Introduction
- For Workshop 3, I decided to create a collage that captures the ongoing time through the changing colors of the sky. Using four photographs I took with my phone, I aimed to document how the day unfolds and transitions, from morning to evening (night). I want to experience and highlight the dynamic shifts in light and colour that mark the progression of the day.
- Exploring, I delved deeper to explore the resources provided on https://p5js.org/reference/p5/image/, which offers detailed guidance on calculating image size, as well as determining width and height. Using these insights, I plan to include techniques from the examples to enhance the visual and technical aspects for my collage coding.
- I decided to look into workshop 3 video, and make the coding. https://canvas.auckland.ac.nz/courses/121821/pages/week-2-overview?module_item_id=2435968. 

## Notes(working progress)
**starting point**
![Screenshot 2025-01-21 152410](https://github.com/user-attachments/assets/ef794495-dd67-4f78-8c44-7330f1d0bf19)
![IMG_1928](https://github.com/user-attachments/assets/ce9afbd5-c1f5-4ae6-9d80-d26fd4b60b3e)
**coding progress**
- When I first started, everything seemed to be progressing smoothly as I built the project step by step. However, I encountered an issue where the images didn’t display in the sketch. Unsure of how to resolve it, I reached out to a friend and leo for assistance. They helped me identify and address the error, which turned out to be related to
```ruby
function setup(){
createCanvas(400,400);
 imgs.push(night);
 imgs.push(evening);
 imgs.push(morning);
}
```
and
```ruby
function draw(){
  background(220);
  image(imgs[2], 0, 0);
}
```
After resolving this problem, it allowed me to move forward with the project successfully and confidently.

**WORKSHOP NOTES**
![Screenshot 2025-01-22 164026](https://github.com/user-attachments/assets/61bd8b27-01b2-4b0a-8901-34cec1943ad3)
![Screenshot 2025-01-22 164015](https://github.com/user-attachments/assets/0d43f4a9-bace-4db2-bbb6-eed77c4e51b3)
![Screenshot 2025-01-22 164049](https://github.com/user-attachments/assets/5115719c-46c1-403c-b849-afa0602fd9d4)
- I think I was quite happy on how I choose the photos, which was a timeslapse from morning to night time. The sense of rhythm and continuity resonates with the viewers. 
- After completing a simple collage, I thought putting filter would be fun, so decided to add 'BLUR' effect, and it turned out quite significant and interesting. 
![image](https://github.com/user-attachments/assets/b924d3f9-0f29-47ad-9ebb-f9b37637a8bf)
![Screenshot 2025-01-22 164809](https://github.com/user-attachments/assets/8425a038-c806-49ed-a417-60ea2230837a)
- I thought with the blurred collage, I was determined to write a text in the middle with the font 'Courier New', making it aesthetic and simple.

**Adding text**
```ruby
 fill(255); // white text
  text("i have finished my day... goodbye", width / 2, height / 2); // centered text
```
**Font size**
```ruby
textSize(32); // setting font size
  textAlign(CENTER, CENTER); // center text
  textFont("Courier New"); // courier new text font
}
```

**RESULT**
![Screenshot 2025-01-22 170444](https://github.com/user-attachments/assets/fa215a9e-04a6-4f9a-973a-f66eb5f9d77e)
![Screenshot 2025-01-22 172230](https://github.com/user-attachments/assets/ace5b869-9c20-4496-8fd3-8f304f47f299)

## Conclusion(+ further improvement)
- By studying workshop 3, and getting help from friends on this page, I gained a deeper understanding of how to manipulate images programmatically. It was quite confusing and were some errors happening on visual studio code, but I will have to improve on adding weight/2 and height/2 on images and also double-check if something is missing inside the sketch.
- 
