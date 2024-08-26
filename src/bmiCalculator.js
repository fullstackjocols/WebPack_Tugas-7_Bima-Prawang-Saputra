// src/bmiCalculator.js
export default class BMICalculator {
    constructor(weight, height) {
      this.weight = weight;
      this.height = height / 100;
    }
  
    kalkulasi() {
      return this.weight / (this.height * this.height);
    }
  
    category() {
      const bmi = this.kalkulasi();
      if (bmi < 18.5) return "Berat Rendah";
      if (bmi >= 18.5 && bmi < 24.9) return "Berat Normal";
      if (bmi >= 25 && bmi < 29.9) return "Berat Berlebih";
      return "Obesitas";
    }
  
    tampilkan() {
      const bmi = this.kalkulasi();
      const category = this.category();
      return "BMI: " + bmi.toFixed(2) + " (" + category + ")";
    }
  
    describeCategory(category) {
      switch (category) {
        case "Berat Rendah":
          return "Risiko kesehatan rendah, tetapi mungkin kekurangan nutrisi.";
        case "Berat Normal":
          return "Berat badan ideal, risiko kesehatan rendah.";
        case "Berat Berlebih":
          return "Meningkatkan risiko kesehatan, disarankan diet dan olahraga.";
        case "Obesitas":
          return "Tinggi risiko kesehatan, disarankan konsultasi dokter.";
      }
    }
  }
  