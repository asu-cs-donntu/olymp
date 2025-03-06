interface TextCardProps {
    heading: string;
    description: string;
}

function TextCard({ heading, description }: TextCardProps) {
    return (
        <div className="crd card-black m-3">
            <p className="h32">{heading}</p>
            <p className='orange-text h24'>{description}</p>
        </div>
    );
}

export default TextCard;