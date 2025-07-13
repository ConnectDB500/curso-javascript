// Type guards

interface Chef {
  cook(): void;
  certificate: string;
}
interface Teacher {
  teach(): void;
  diploma: string;
}
interface Driver {
  drive(): void;
  license: string;
}

type Professionals = Chef | Teacher | Driver;

function isChef(value: Professionals): value is Chef{
  return (value as Chef).cook !== undefined && (value as Chef).certificate !== undefined
}
function isTeacher(value: Professionals): value is Teacher{
  return (value as Teacher).teach !== undefined && (value as Teacher).diploma !== undefined
}
function isDriver(value: Professionals): value is Driver{
  return (value as Driver).drive !== undefined && (value as Driver).license !== undefined
}

function execute1(professional: Professionals){
  if (isChef(professional)){
    professional
    return;
  }
  if (isTeacher(professional)){
    professional
    return;
  }
  professional
}

function execute2(professional: Professionals){
  switch(true){
    case isChef(professional): {
      professional
      break;
    }
    case isTeacher(professional): {
      professional
      break;
    }
    case isDriver(professional): {
      professional
      break;
    }
  }
}