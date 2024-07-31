import ReactSelect, {components, ControlProps} from 'react-select'

const options = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'}
]

const Control = ({children, ...props}: ControlProps<{ value: string, label: string }>) => {
    return (
        <components.Control {...props}>
      <span style={{display: "flex", marginLeft: "5px"}}>
          <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff">
              <g
                  id="SVGRepo_bgCarrier"
                  strokeWidth="0">
              </g>
              <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round">
              </g>
              <g id="SVGRepo_iconCarrier">
                  <path
                      d="M19 10C19 13.9765 12 21 12 21C12 21 5 13.9765 5 10C5 6.02355 8.13401 3 12 3C15.866 3 19 6.02355 19 10Z"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2">
                  </path>
                  <circle
                      cx="12"
                      cy="10"
                      r="3"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2">
              </circle>
              </g>
          </svg>
      </span>
            {children}
        </components.Control>
    );
}
const Select = () => {
    return (
        <ReactSelect
            options={options}
            components={{Control}}
            styles={{
                control: (base) => ({
                    ...base,
                    background: 'transparent',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    boxShadow: 'rgba(255, 255, 255, 0.2)',
                    ":hover": {
                        borderColor: 'rgba(255, 255, 255, 0.4)',
                    },
                }),
                singleValue: (base) => ({...base, color: 'white'}),
                placeholder: (base) => ({...base, color: 'rgba(255, 255, 255, 0.6)'}),
                indicatorSeparator: (base) => ({...base, background: "rgba(255,255,255, 0.2)"}),
                indicatorsContainer: (base) => ({...base, color: "rgba(255,255,255, 0.6)"}),
                menu: (base) => ({...base, background: "transparent", color: "white"}),
                option: (base, {isFocused, isSelected}) => ({
                    ...base,
                    background: isFocused ? 'rgba(255, 255, 255, 0.2)' : isSelected ? 'rgba(255, 255, 255, 0.3)' : 'transparent',
                    ":active": {
                        background: "rgba(255, 255, 255, 0.2)"
                    }
                }),
            }}/>
    )
}

export default Select