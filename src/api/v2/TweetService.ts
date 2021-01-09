import api from '../api';

class TweetService {
    public static search({from} : {from: string}) {
            return api.get('/2/tweets/search/recent', {

        });
    }
}

export default TweetService;