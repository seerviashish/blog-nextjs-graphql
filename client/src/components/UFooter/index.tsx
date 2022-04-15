import * as React from "react"

type Props = {
    children: React.ReactNode
}

const UMain: React.FC<Props> = (props) => {
    return <main>{props.children}</main>
}

export default UMain