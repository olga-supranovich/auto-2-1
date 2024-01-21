class SendButton {
  constructor(width, height, type, color) {
    this.width = width;
    this.height = height;
    this.type = type;
    this.color = color;
  }

  onClick() {
    console.log(
      `Width: ${this.width}, Height: ${this.height}, Type: ${this.type}, Color: ${this.color}`
    );
  }
}

let ourButton = new SendButton(100, 200, "button", "green");
ourButton.onClick();

function testButton(
  expectedWidth,
  expectedHeight,
  expectedType,
  expectedColor
) {
  if (ourButton.width === expectedWidth &&
    ourButton.height === expectedHeight &&
    ourButton.type === expectedType &&
    ourButton.color === expectedColor
  ) {
    console.log("All properties are accurate");
  } else if(ourButton.width !== expectedWidth) {
    console.log(`Expected width: ${expectedWidth}, actual width: ${ourButton.width}`)
  } else if(ourButton.height !== expectedHeight) {
    console.log(`Expected height: ${expectedHeight}, actual width: ${ourButton.height}`)
  } else if(!ourButton.type !== expectedType) {
    console.log(`Expected type: ${expectedType}, actual type: ${ourButton.type}`)
  } else if (!ourButton.color !== expectedColor) {
    console.log(`Expected color: ${expectedColor}, actual color: ${ourButton.color}`)
}
}

testButton(100, 300, "button", "green");
