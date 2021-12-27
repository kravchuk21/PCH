import React from "react"
import ContentLoader from "react-content-loader"

const MainLoader: React.FC = (props) => (
    <ContentLoader
        speed={1}
        width={250}
        height={255}
        viewBox="0 0 250 255"
        backgroundColor="#f5f5f5"
        foregroundColor="#ededed"
        {...props}
    >
        <rect x="0" y="0" rx="25" ry="25" width="250" height="150" />
        <rect x="0" y="162" rx="8" ry="8" width="100" height="20" />
        <rect x="200" y="162" rx="8" ry="8" width="50" height="20" />
        <rect x="0" y="190" rx="5" ry="5" width="250" height="10" />
        <rect x="0" y="210" rx="5" ry="5" width="250" height="10" />
        <rect x="0" y="230" rx="5" ry="5" width="250" height="10" />
    </ContentLoader>
)

export default MainLoader

