// Union types |

enum TrafficLightType {
  Yellow,
  Red,
  Green
}

interface YellowCollor {
  type: TrafficLightType.Yellow;
  wait(): void;
}

interface RedColor {
  type: TrafficLightType.Red;
  stop(): void;
}

interface GreenColor {
  type: TrafficLightType.Green;
  drive(): void;
}

type TrafficLight = YellowCollor | RedColor | GreenColor;

const trafficLight1: TrafficLight = {
  type: TrafficLightType.Yellow,
  wait() {
    console.log("Wait...");
  }
}