
export default function ControlledForm() {


    return (
        <>
            <h1>Controlled Form</h1>

            <form>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div>
                    <label htmlFor="username">Password:</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div>
                    <label htmlFor="username">Age:</label>
                    <input type="number" name="age" id="age" />
                </div>
                <div>
                    <input type="submit" value="Register" />
                </div>
            </form>
        </>
    );
};