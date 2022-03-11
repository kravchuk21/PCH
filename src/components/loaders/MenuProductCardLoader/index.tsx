import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader: React.FC = (props) => (
    <ContentLoader
        speed={1}
        width={140}
        height={170}
        viewBox="0 0 140 170"
        backgroundColor="#f5f5f5"
        foregroundColor="#ededed"
        {...props}
    >
        <rect rx={25} width="140" height="170"/>
    </ContentLoader>
)

export default MyLoader
