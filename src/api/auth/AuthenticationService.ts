import api from '../api';


class AuthenticationService {
    public static oAuth2BT({grant_type = process.env.OAUTH_2_GRANT_TYPE} : {grant_type: any}) {
        console.log({
            grant_type: 'client_credentials'
        });
        return api.post('/oauth2/token', JSON.stringify({
            grant_type: 'client_credentials',
            Name: 'Nikolas'
        })).then((response) => {
            console.log('Teste 1');
            console.log(response);
        }).catch((errors) => {
            console.log('Teste 2');
            console.log(errors);
        });
    }
}

export default AuthenticationService;