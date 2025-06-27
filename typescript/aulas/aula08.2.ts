// Union type

type Action = "create" | "update" | "delete";

function manage(action: Action){
  return action;
}

manage("create")

//
type ImageSize = 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048
type ImageType = "GIF" | "jpg" | "png";

interface Image {
  type: ImageType;
  size: ImageSize;
}

const image: Image = {
  type: "png",
  size: 128
}

