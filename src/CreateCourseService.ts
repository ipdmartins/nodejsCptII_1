interface Course {
  name: string;
  duration: number;
  educator: string;
}

class CreateCourseService {
  //com esta sintaxe, a duration foi definida com um valor default de 8
  execute({ name, duration = 8, educator }: Course) {
    console.log(name, duration, educator);
  }
}

export default new CreateCourseService();
