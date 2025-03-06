interface TextCardProps {
    heading: string;
    description: string;
}

function TextCard({ heading, description }: TextCardProps) {
    return (
        <div className="crd card-black col-6 m-3">
            <p className="h32">{heading}</p>
            <p className='orange-text h24'>{description}</p>
        </div>
    );
}

export default TextCard;