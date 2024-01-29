export default function PersonalDataForm() {
    return(
        <form>
            <label>First Name</label>
            <input type="text" name="first_name" />
            <label>Last Name</label>
            <input type="text" name="last_name" />
            <label>Email</label>
            <input type="text" name="email" />
        </form>
    );
}