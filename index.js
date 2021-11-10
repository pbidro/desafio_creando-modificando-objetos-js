// Consultorio
function Consultorio(nombre, paciente) {
  this.nombre = nombre;
  this.paciente = paciente;
}

Consultorio.prototype.Listar = function () {
  console.log(`Listando pacientes`);
  for (let i = 0; i < this.paciente.length; i++) {
    var nombre_aux = this.paciente[i].nombre;
    var edad_aux = this.paciente[i].edad;
    var rut_aux = this.paciente[i].rut;
    var diagnostico_aux = this.paciente[i].diagnostico;

    console.log(
      `Paciente numero ${
        i + 1
      }: ${nombre_aux} | ${edad_aux} | ${rut_aux} | ${diagnostico_aux}`
    );
  }
};

Consultorio.prototype.Buscar = function (nombre) {
  console.log(`Buscando paciente: ${nombre}`);
  for (let i = 0; i < this.paciente.length; i++) {
    var nombre_aux = this.paciente[i].nombre;
    var edad_aux = this.paciente[i].edad;
    var rut_aux = this.paciente[i].rut;
    var diagnostico_aux = this.paciente[i].diagnostico;
    if (nombre.toLowerCase() === nombre_aux.toLowerCase()) {
      console.log(
        `Paciente numero ${
          i + 1
        }: ${nombre_aux} | ${edad_aux} | ${rut_aux} | ${diagnostico_aux}`
      );
    }
  }
};

Consultorio.prototype.Agregar = function (paciente) {
  this.paciente.push(paciente);
  console.log(`se agrego el paciente: ${paciente.nombre} a la base de datos de pacientes`);
};

Consultorio.prototype.cambiarDiagnostico = function (rut, diagnostico) {
  console.log(`Cambiando diagnostico del paciente con rut: ${rut}`);
  var index = this.paciente.findIndex(function (paciente) {
    return paciente.rut === rut;
  });

  if (index !== -1) {
    this.paciente[index].setDiagnostico(diagnostico);
  }
};

// Paciente
function Paciente(nombre, edad, rut, diagnostico) {
  this.nombre = nombre;
  this.edad = edad;
  this.rut = rut;
  this.diagnostico = diagnostico;
}

Paciente.prototype.setDiagnostico = function (diagnostico) {
  this.diagnostico = diagnostico;
};

// Ejecucion
var paciente1 = new Paciente("Lucas", 12, "12345678-1", "Otitis");
var paciente2 = new Paciente("Pablo", 27, "66666666-1", "Hipocondriaco");
var paciente3 = new Paciente("Fulanito", 21, "12233345-1", "Escoliosis");

var consultorio1 = new Consultorio("Patitas", [paciente1, paciente2]);

 consultorio1.Listar();
 consultorio1.Buscar("pablo");
 consultorio1.Agregar(paciente3);
 consultorio1.Listar();
 consultorio1.cambiarDiagnostico("66666666-1", "Muy hipocondriaco");
 consultorio1.Buscar("pablo");
