import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={315}
    viewBox="0 0 400 315"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="139" y="0" rx="0" ry="0" width="121" height="59" /> 
    <rect x="-9" y="77" rx="0" ry="0" width="173" height="20" /> 
    <rect x="174" y="80" rx="0" ry="0" width="40" height="19" /> 
    <rect x="-7" y="287" rx="0" ry="0" width="168" height="20" /> 
    <rect x="-4" y="132" rx="0" ry="0" width="166" height="20" /> 
    <rect x="-10" y="183" rx="0" ry="0" width="173" height="20" /> 
    <rect x="4" y="234" rx="0" ry="0" width="160" height="20" /> 
    <rect x="238" y="235" rx="0" ry="0" width="164" height="20" /> 
    <rect x="235" y="184" rx="0" ry="0" width="168" height="20" /> 
    <rect x="233" y="131" rx="0" ry="0" width="170" height="20" /> 
    <rect x="232" y="80" rx="0" ry="0" width="164" height="20" /> 
    <rect x="236" y="282" rx="0" ry="0" width="164" height="20" /> 
    <rect x="180" y="185" rx="0" ry="0" width="40" height="19" /> 
    <rect x="180" y="237" rx="0" ry="0" width="40" height="19" /> 
    <rect x="179" y="287" rx="0" ry="0" width="40" height="19" /> 
    <rect x="175" y="132" rx="0" ry="0" width="40" height="19" />
  </ContentLoader>
)

export default Loader