abstract class Evaluacion {
  protected componente: string;

  constructor(componente: string) {
    this.componente = componente;
  }

  abstract calcularPuntaje(): number;
  abstract calcularPorcentaje(): number;

  describir(): string {
    return `${this.constructor.name} [${this.componente}]: ` +
           `Puntaje=${this.calcularPuntaje().toFixed(2)}, Efectividad=${this.calcularPorcentaje().toFixed(2)}%`;
  }
}

class EvaluacionListening extends Evaluacion {
  private aciertos: number;

  constructor(componente: string, aciertos: number) {
    super(componente);
    this.aciertos = aciertos;
  }

  calcularPuntaje(): number { return this.aciertos * 4; }
  calcularPorcentaje(): number { return (this.calcularPuntaje() / 100) * 100; }
}

class EvaluacionSpeaking extends Evaluacion {
  private fluidez: number;
  private vocabulario: number;

  constructor(componente: string, fluidez: number, vocabulario: number) {
    super(componente);
    this.fluidez = fluidez;
    this.vocabulario = vocabulario;
  }

  calcularPuntaje(): number { return this.fluidez + this.vocabulario; }
  calcularPorcentaje(): number { return (this.calcularPuntaje() / 50) * 100; }
}

class EvaluacionWriting extends Evaluacion {
  private gramatica: number;
  private coherencia: number;
  private ortografia: number;

  constructor(componente: string, gramatica: number, coherencia: number, ortografia: number) {
    super(componente);
    this.gramatica = gramatica;
    this.coherencia = coherencia;
    this.ortografia = ortografia;
  }

  calcularPorcentaje(): number { return ((this.gramatica + this.coherencia + this.ortografia) / 30) * 100; }
  calcularPuntaje(): number {
    const totalPuntos = this.gramatica + this.coherencia + this.ortografia;
    return Math.sqrt(totalPuntos * (totalPuntos - this.gramatica) * (totalPuntos - this.coherencia) * (totalPuntos - this.ortografia));
  }
}

console.log("=== POLIMORFISMO EN EVALUACIONES ===\n");

const evaluacionesCurso: Evaluacion[] = [
  new EvaluacionListening("rojo", 5),
  new EvaluacionSpeaking("azul", 4, 6),
  new EvaluacionWriting("verde", 3, 4, 5),
  new EvaluacionListening("naranja", 3),
];

for (const examen of evaluacionesCurso) {
  console.log(`  ${examen.describir()}`);
}

const puntajeAcumulado = evaluacionesCurso.reduce((acc, e) => acc + e.calcularPuntaje(), 0);
console.log(`\n  Puntaje total acumulado: ${puntajeAcumulado.toFixed(2)}`);

export {};