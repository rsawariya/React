import Card from "../../helpers/Card";
const AppList = () => {
    console.log("In applist")
    return (
        <Card
            to="counter-app"
            title="Counter App"
            description="Sample counter application in order to understand redux-toolkit implementation"
        />
    )
}
export default AppList;