import MaskedInput from "react-text-mask";

export default function MaskCpf(props) {
    const { inputRef, mask, ...other } = props;
    return (
        <MaskedInput 
            {...other}
            ref={ref => {
                inputRef(ref ? ref.inputElement : null)
            }}
            mask={mask}
        />
    )
}