import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader: React.FC = (props) => (
    <ContentLoader
        speed={1}
        width={100}
        height={41}
        viewBox="0 0 100 41"
        backgroundColor="#f5f5f5"
        foregroundColor="#ededed"
        {...props}
    >
        <rect x="0" y="0" rx="13" ry="13" width="100" height="41" />
    </ContentLoader>
)

export default MyLoader

