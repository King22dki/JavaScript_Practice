class Controls {
    constructor(type) {
      // Initialise control variables
      this.forward = false;
      this.left = false;
      this.right = false;
      this.reverse = false;

      switch(type){
        case "KEYS":
          this.#addKeyboardListeners(); // Internal method conventionally prefixed with an underscore
          break;
        case "DUMMY":
          this.forward=true;// Set foward to true dor continous movemen
          break;

      }
    }
  
    #addKeyboardListeners() {
      document.onkeydown = (event) => {
        switch (event.key) {
          case "ArrowLeft":
            this.left = true; // Set left to true when ArrowLeft key is pressed
            break;
          case "ArrowRight":
            this.right = true; // Set right to true when ArrowRight key is pressed
            break;
          case "ArrowUp":
            this.forward = true; // Set forward to true when ArrowUp key is pressed
            break;
          case "ArrowDown":
            this.reverse = true; // Set reverse to true when ArrowDown key is pressed
            break;
        }

      };
      document.onkeyup = (event) => {
        switch (event.key) {
          case "ArrowLeft":
            this.left = false; // Set left to false when ArrowLeft key is released
            break;
          case "ArrowRight":
            this.right = false; // Set right to false when ArrowRight key is released
            break;
          case "ArrowUp":
            this.forward = false; // Set forward to false when ArrowUp key is released
            break;
          case "ArrowDown":
            this.reverse = false; // Set reverse to false when ArrowDown key is released
            break;
        }
      };
    }
  }
  