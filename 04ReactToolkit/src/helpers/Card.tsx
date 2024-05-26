import { ReactElement, memo } from "react";
import { CounterSVG } from "../assets/svgs";
import { Link } from "react-router-dom";

interface ICard {
    to: string,
    title?: string,
    description?: string,
    image?: ReactElement
}

const Card = ({ to, title = "Title", description = "Sample Description", image = <CounterSVG /> }: ICard) => {
    return (
        <Link to={to}>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    {image}
                </a>
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                </div>
            </div>
        </Link>
    )
}
export default memo(Card);