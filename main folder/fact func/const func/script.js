

function Iphone3(ASIN, color, display, camera, bluetooth){
     
    this.ASIN = ASIN;
    this.color = color;
    this.display = display;
    this.camera = camera;
    this.bluetooth = bluetooth;

    this.dial = function(){
        console.log(  "tring.. tring..." )
    }

    this.sendMessage = function(){
       console.log( "Sending message..." )
    }

    this.cameraClick = function(){
        console.log( "Camera clicked" )
    }

    this.connectBluetooth = function(){
         console.log("Bluetooth connected successfully...")
    }


}

let container = {}

 Iphone3.call(container, "B09X67JBQV", "grey", "7.8-inch","2.0 MP", "Bluetooth 5.1")

 console.log(container);

 container.dial()
 container.sendMessage()
 container.cameraClick()
 container.connectBluetooth()

// let ip3 = new Iphone3("B09X67JBQV", "grey", "7.8-inch","2.0 MP", "Bluetooth 5.1")

// console.log(ip3)