function AddOns({ breakfast, setBreakfast, bed, setBed }) {
    return (
        <>
            <div>
                <h1>Add-on</h1>
                <label>
                    <input type="checkBox"
                        checked={breakfast}
                        onChange={(e) => setBreakfast(e.target.checked)} />
                    BreakFast - 500
                </label>
                <br />

                <label>
                    <input type="checkBox"
                        checked={bed}
                        onChange={(e) => setBed(e.target.checked)} />
                    Extra bed - 700
                </label>

            </div>


            <p>BreakFast : {breakfast ? "Yes" : "No"}</p>
            <p>Extra Bed : {bed ? "Yes" : "No"}</p>


        </>
    )
}

export default AddOns;