import Card from "./card";
import Divisor from "./divisor";

export default function Portfolio() {
    return (
        <section  id="portfolio">
            <Divisor texto={"Portfólio"}/>
            <div className="flex">
                <Card projeto={"Projeto 1"}/>
                <Card projeto={"Projeto 2"}/>
                <Card projeto={"Projeto 3"}/>
            </div>
        </section>
    )
}