
// firtst product details 

function iPhone1 (ASIN, color, display, camera){
      let obj = {};

      obj.ASIN = ASIN;
      obj.color = color;
      obj.display = display;
      obj.camera = camera;

      obj.dial = function(){
         return "tring.. tring..."
      }

      obj.sendMessage = function(){
        return "Sending message..."
     }

     obj.cameraClick= function(){
        return  "Camera clicked"
     }

     return obj

}

let p1 = iPhone1("00e7ju4x ", "grey", "7.5-inch", "4.0-MP");
console.log(p1)

console.log(p1.dial())
console.log(p1.sendMessage())
console.log(p1.cameraClick())


// second product details

function iPhone2 (ASIN, color, display, camera, bluetooth){
    let obj = {};

    obj.ASIN = ASIN;
    obj.color = color;
    obj.display = display;
    obj.camera = camera;
    obj.bluetooth = bluetooth;

    obj.dial = function(){
       return "tring.. tring..."
    }

    obj.sendMessage = function(){
      return "Sending message..."
   }

   obj.cameraClick= function(){
      return  "Camera clicked"
   }

   obj.connectBluetooth = function(){
    return "Bluetooth connected successfully..."
   }

   return obj

}

let p2 = iPhone2("00e7ju4x ", "grey", "7.5-inch", "4.0-MP");
console.log(p2)

console.log(p2.dial())
console.log(p2.sendMessage())
console.log(p2.cameraClick())
console.log(p2.connectBluetooth())

