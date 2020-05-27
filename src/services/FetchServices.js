// this class is created using singletone pattern

class FetchService {

    static instance = null;

    constructor() {
        if(FetchService.instance) {

            return FetchService.instance
        }
        FetchService.instance = this;
    }

    get() {

    }

    post() {

    }

    put() {

    }

    delete() {

    }
}

const FetchService = new FetchService()

export default FetchService