type Props = {
    name: string;
    required?: boolean;
    onInputChange: (value: string) => void;
};

export default function Input({ name, required, onInputChange }: Props) {
    return (
        <>
            <div>
                {/* Label */}
                <div>
                    <span>{name}</span> 
                    { required && <span className="text-red-500">*</span>}
                </div>

                <input 
                    type="text"
                    className="border" 
                    onChange={(e) => onInputChange(e.target.value)}
                />
            </div>
        </>
    )
}