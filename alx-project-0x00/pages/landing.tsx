import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing : React.FC = ()=> {
    return (
        <div>
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card />
            <Button title="Small - Rounded Sm" styles="text-sm rounded-sm"/>
            <Button title="Medium - Rounded Md" styles="text-md rounded-md"/>
            <Button title="Large - Rounded Full" styles="text-lg rounded-full"/>
        </div>
    )
}
export default Landing;