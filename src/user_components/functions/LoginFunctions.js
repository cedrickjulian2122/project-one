function hastickRememberMeonChange(e) {
    console.log(`checked = ${e.target.checked}`);
}


function myvalidate(username, password) {
        return {
            username: username.length === 0,
            password: password.length === 0
        };
        
 }

export const handleUsernameChange = evt => {
    this.setState({ username: evt.target.value });
};

export const tickRememberMeonChange = hastickRememberMeonChange;
export const validate = myvalidate;