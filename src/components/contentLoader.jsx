import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={235}
    viewBox="0 0 400 235"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="142" y="2" rx="0" ry="0" width="109" height="34" /> 
    <rect x="196" y="24" rx="0" ry="0" width="19" height="7" /> 
    <rect x="196" y="27" rx="0" ry="0" width="18" height="5" /> 
    <rect x="142" y="72" rx="0" ry="0" width="108" height="73" /> 
    <rect x="206" y="161" rx="0" ry="0" width="33" height="0" /> 
    <rect x="87" y="46" rx="0" ry="0" width="218" height="15" /> 
    <rect x="93" y="158" rx="0" ry="0" width="219" height="16" /> 
    <rect x="140" y="188" rx="0" ry="0" width="113" height="42" />
  </ContentLoader>
)

export default Loader