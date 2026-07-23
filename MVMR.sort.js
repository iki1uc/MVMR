class MVMR_SORT {

    sortVector(v){
        return v % 81;
    }

    sortMatrix(m){
        return [m[0] % 9, m[1] % 9];
    }

    sortRoute(r){
        return r % 81;
    }
}

window.MVMR_SORT = new MVMR_SORT();
