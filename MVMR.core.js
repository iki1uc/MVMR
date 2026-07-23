class MVMR {

    constructor(){
        this.ort = 0;
        this.home = 0;
        this.delta = 0;
        this.stabil = 0;

        this.vector = 0;   // WHIRL
        this.matrix = [0,0]; // OCTA
        this.route = 0;    // REAL
    }

    set(ort, home, stabil){
        this.ort = ort;
        this.home = home;
        this.delta = ort - home;
        this.stabil = stabil;
    }

    compute(){

        // WHIRL – Vektor
        this.vector = (this.delta * this.stabil) % 81;

        // OCTA – Matrix
        const m = (this.ort + this.home + this.delta) % 9;
        this.matrix = [m, m];

        // REAL – Routing
        this.route = (this.stabil + this.delta) % 81;

        return {
            vector: this.vector,
            matrix: this.matrix,
            route: this.route
        };
    }
}

window.MVMR = new MVMR();
