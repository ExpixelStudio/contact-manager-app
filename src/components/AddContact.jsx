function AddContact() {
    return (
        <div className="ui main">
            <h2>Add Contact</h2>

            <form className="ui form">
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Name" />
                </div>

                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="Email" />
                </div>

                <button className="ui button blue">Add</button>
            </form>
        </div>
    );
}
export default AddContact;