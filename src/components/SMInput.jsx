import { TextField } from "@mui/material";

function SMInput({ variant,
    disabled,
    label,
    error,
    height,
    helperText,
    onChange,
    placeholder,
    name,
    value,
    type }) {
    return (
        <TextField
            type={type}
            sx={{ width: "100%" }}
            rows={height ? height : undefined}
            variant={variant}
            label={label}
            disabled={disabled || false}
            error={error || false}
            multiline={height ? true : false}
            helperText={helperText}
            onChange={onChange ? onChange : () => { }}
            value={value ? value : ""}
            name={name}
            placeholder={placeholder} />
    )
}
export default SMInput;