import React from 'react'

import { TransformFontSize } from 'common/utils/helpers'

export default function Template4({data}) {
    return (
        <table id="template4" cellPadding={0} cellSpacing={0} style={{
            verticalAlign: '-webkit-baseline-middle',
            fontFamily: `${data.fontFamily}`,
            width: `${TransformFontSize(525, data.fontSize)}`
        }}>
            <tbody>
            <tr>
                <td style={{verticalAlign: 'middle'}}>
                    <table cellPadding={0} cellSpacing={0}
                           style={{verticalAlign: '-webkit-baseline-middle', fontFamily: `${data.fontFamily}`}}>
                        <tbody>
                        <tr>
                            {data.profilePhoto && data.profilePicture &&(
                                <>
                                    <td style={{verticalAlign: 'top'}}>
                                        <table cellPadding={0} cellSpacing={0} style={{
                                            verticalAlign: '-webkit-baseline-middle',
                                            fontFamily: `${data.fontFamily}`,
                                            width: '100%'
                                        }}>
                                            <tbody>
                                            <tr height={`${TransformFontSize(5, data.fontSize)}`}/>
                                            <tr>
                                                <td style={{textAlign: 'center'}}>
                                                    <img alt="" width={`${TransformFontSize(90, data.fontSize)}`} src={data.profilePhoto}/>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td width={`${TransformFontSize(29, data.fontSize)}`}>
                                        <div/>
                                    </td>
                                </>
                            )}

                            <td width={`${TransformFontSize(180, data.fontSize)}`} style={{verticalAlign: 'top'}}>
                                <table cellPadding={0} cellSpacing={0} style={{
                                    verticalAlign: '-webkit-baseline-middle',
                                    fontFamily: `${data.fontFamily}`,
                                    width: '100%'
                                }}>
                                    <tbody>
                                    <tr height={`${TransformFontSize(10, data.fontSize)}`}/>

                                    {((data.firstName.text && data.firstName.status !== 'invisible') || (data.lastName.text && data.lastName.status !== 'invisible')) && (
                                        <tr>
                                            <td style={{textAlign: 'left'}}>
                                                <h2 color={data.colors.textColor} style={{
                                                    margin: `0px 0px ${TransformFontSize(5, data.fontSize)}`,
                                                    fontSize: `${TransformFontSize(20, data.fontSize)}`,
                                                    color: `${data.colors.textColor}`
                                                }}>

                                                    <span>
                                                    { data.firstName.status !== 'invisible' && (`${data.firstName.text} `) }
                                                    { data.lastName.status !== 'invisible' && (`${data.lastName.text}`) }
                                                    </span>
                                                </h2>
                                            </td>
                                        </tr>
                                    )}


                                    {data.jobTitle.text && data.jobTitle.status !== 'invisible' && (
                                        <>
                                            <tr>
                                                <td>
                                                    <p color={data.colors.textColor} style={{
                                                        margin: `0px 0px ${TransformFontSize(5, data.fontSize)}`,
                                                        fontFamily: `${data.fontFamily}`,
                                                        fontSize: `${TransformFontSize(14, data.fontSize)}`,
                                                        color: `${data.colors.textColor}`
                                                    }}>
                                                        <span style={{fontFamily: `${data.fontFamily}`}}>{data.jobTitle.text}</span>
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr height={`${TransformFontSize(5, data.fontSize)}`}></tr>
                                        </>
                                    )}


                                    {((data.companyName.text && data.companyName.status !== 'invisible') || (data.department.text && data.department.status !== 'invisible')) && (
                                        <tr>
                                            <td>
                                                <p color={data.colors.textColor} style={{
                                                    margin: '0px',
                                                    fontFamily: `${data.fontFamily}`,
                                                    fontSize: `${TransformFontSize(14, data.fontSize)}`,
                                                    color: `${data.colors.textColor}`,
                                                    opacity: 0.5
                                                }}>
                                                    {(data.companyName.text && data.companyName.status !== 'invisible') && (
                                                        <>
                                                            <span>{data.companyName.text}</span>
                                                            {(data.department.text && data.department.status !== 'invisible') && (
                                                                <span style={{padding: `0 ${TransformFontSize(8, data.fontSize)}`, fontFamily: `${data.fontFamily}`}}>|</span>
                                                            )}
                                                        </>
                                                    )}
                                                    {(data.department.text && data.department.status !== 'invisible') && (
                                                        <span style={{fontFamily: `${data.fontFamily}`}}>{data.department.text}</span>
                                                    )}
                                                </p>
                                            </td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </td>
                            <td width={`${TransformFontSize(20, data.fontSize)}`}>
                                <div/>
                            </td>
                            <td width={`${TransformFontSize(190, data.fontSize)}`} style={{verticalAlign: 'top'}}>
                                <table cellPadding={0} cellSpacing={0} style={{
                                    verticalAlign: '-webkit-baseline-middle',
                                    fontFamily: `${data.fontFamily}`
                                }}>
                                    <tbody>
                                    <tr height={`${TransformFontSize(10, data.fontSize)}`}/>

                                    { data.addresses.filter((address) => { return address.text && address.status !== 'invisible'}).length > 0 && (
                                        <tr height={`${TransformFontSize(25, data.fontSize)}`} style={{verticalAlign: 'middle'}}>
                                            <td width={`${TransformFontSize(30, data.fontSize)}`} style={{verticalAlign: 'top'}}>
                                                <table cellPadding={0} cellSpacing={0} style={{
                                                    verticalAlign: '-webkit-baseline-middle',
                                                    fontFamily: `${data.fontFamily}`
                                                }}>
                                                    <tbody>
                                                    <tr>
                                                        <td style={{verticalAlign: 'bottom'}}>
                                                            <img alt="" width={`${TransformFontSize(13, data.fontSize)}`}
                                                                 src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png"
                                                                 color={data.colors.themeColor} style={{
                                                                display: 'block',
                                                                backgroundColor: `${data.colors.themeColor}`
                                                            }}/>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td style={{padding: '0px'}}>
                                                <p color={data.colors.textColor} style={{
                                                    fontSize: `${TransformFontSize(12, data.fontSize)}`,
                                                    padding: `0 ${TransformFontSize(10, data.fontSize)}`,
                                                    margin: 0,
                                                    color: `${data.colors.textColor}`
                                                }}>
                                                    {data.addresses.map((address, id) => {
                                                        if(address.text && address.status !== 'invisible'){
                                                            let filteredAddresses = data.addresses.filter(item => item.text && item.status !== 'invisible')
                                                            let prefix = (filteredAddresses[id] && filteredAddresses[id].text) && filteredAddresses.length !== id + 1 ? <span>, </span> : null
                                                            return <React.Fragment key={address.text + id}>{address.text}{prefix}</React.Fragment>
                                                        } else {
                                                            return null
                                                        }
                                                    })}
                                                </p>
                                            </td>
                                        </tr>
                                    )}

                                    {((data.officeNumber.text && data.officeNumber.status !== 'invisible') || (data.mobileNumber.text && data.mobileNumber.status !== 'invisible')) && (
                                        <tr height={`${TransformFontSize(25, data.fontSize)}`} style={{verticalAlign: 'middle'}}>
                                            <td width={`${TransformFontSize(30, data.fontSize)}`} style={{verticalAlign: 'middle'}}>
                                                <img alt="" width={`${TransformFontSize(13, data.fontSize)}`}
                                                     src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png"
                                                     color={data.colors.themeColor} style={{
                                                    display: 'block',
                                                    fontFamily: `${data.fontFamily}`,
                                                    backgroundColor: `${data.colors.themeColor}`
                                                }}/>
                                            </td>
                                            <td style={{padding: '0px', color: 'rgb(0, 0, 0)'}}>
                                                <p style={{padding: `${TransformFontSize(10, data.fontSize)} ${TransformFontSize(10, data.fontSize)}`, margin: '0'}}>
                                                    {(data.officeNumber.text && data.officeNumber.status !== 'invisible') && (
                                                        <>
                                                            <a href={`tel:${data.officeNumber.text}`}
                                                               color={data.colors.linkColor} style={{
                                                                textDecoration: 'none',
                                                                fontFamily: `${data.fontFamily}`,
                                                                color: `${data.colors.linkColor}`,
                                                                fontSize: `${TransformFontSize(12, data.fontSize)}`
                                                            }}>
                                                                {data.officeNumber.text}
                                                            </a>


                                                            {(data.mobileNumber.text && data.mobileNumber.status !== 'invisible') && (
                                                                <span style={{
                                                                    padding: `0 ${TransformFontSize(8, data.fontSize)}`,
                                                                    fontFamily: `${data.fontFamily}`,
                                                                    color: `${data.colors.linkColor}`
                                                                }}>|</span>
                                                            )}
                                                        </>
                                                    )}
                                                    {data.mobileNumber.text && data.mobileNumber.status !== 'invisible' && (
                                                        <a href={`tel:${data.mobileNumber.text}`}
                                                           color={data.colors.linkColor} style={{
                                                            textDecoration: 'none',
                                                            fontFamily: `${data.fontFamily}`,
                                                            color: `${data.colors.linkColor}`,
                                                            fontSize: `${TransformFontSize(12, data.fontSize)}`
                                                        }}>
                                                            <span style={{fontFamily: `${data.fontFamily}`}}>{data.mobileNumber.text}</span>
                                                        </a>
                                                    )}
                                                </p>
                                            </td>
                                        </tr>
                                    )}

                                    {data.email.text && data.email.status !== 'invisible' && (
                                        <tr height={`${TransformFontSize(25, data.fontSize)}`} style={{verticalAlign: 'middle'}}>
                                            <td width={`${TransformFontSize(30, data.fontSize)}`} style={{verticalAlign: 'middle'}}>
                                                <img alt="" width={`${TransformFontSize(13, data.fontSize)}`}
                                                     src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png"
                                                     color={data.colors.themeColor} style={{
                                                    display: 'block',
                                                    backgroundColor: `${data.colors.themeColor}`
                                                }}/>
                                            </td>
                                            <td style={{padding: '0px'}}>
                                                <a href={`mailto:${data.email.text}`} color={data.colors.linkColor} style={{
                                                    textDecoration: 'none',
                                                    fontFamily: `${data.fontFamily}`,
                                                    color: `${data.colors.linkColor}`,
                                                    padding: `0 ${TransformFontSize(10, data.fontSize)}`,
                                                    fontSize: `${TransformFontSize(12, data.fontSize)}`
                                                }}>
                                                    <span style={{fontFamily: `${data.fontFamily}`}}>{data.email.text}</span>
                                                </a>
                                            </td>
                                        </tr>
                                    )}

                                    {data.websiteUrl.text && data.websiteUrl.status !== 'invisible' && (
                                        <tr height={`${TransformFontSize(25, data.fontSize)}`} style={{verticalAlign: 'middle'}}>
                                            <td width={`${TransformFontSize(30, data.fontSize)}`} style={{verticalAlign: 'middle'}}>
                                                <img alt="" width={`${TransformFontSize(13, data.fontSize)}`}
                                                     src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png"
                                                     color={data.colors.themeColor} style={{
                                                    display: 'block',
                                                    backgroundColor: `${data.colors.themeColor}`
                                                }}/>
                                            </td>
                                            <td style={{padding: '0px'}}>
                                                <a href={data.websiteUrl.text} color={data.colors.linkColor} style={{
                                                    textDecoration: 'none',
                                                    color: `${data.colors.linkColor}`,
                                                    fontSize: `${TransformFontSize(12, data.fontSize)}`,
                                                    padding: `0 ${TransformFontSize(10, data.fontSize)}`,
                                                    fontFamily: `${data.fontFamily}`
                                                }}>
                                                    <span style={{fontFamily: `${data.fontFamily}`}}>{data.websiteUrl.text}</span>
                                                </a>
                                            </td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td height={`${TransformFontSize(10, data.fontSize)}`}/>
            </tr>
            <tr>
                <td height={`${TransformFontSize(2, data.fontSize)}`} color={data.colors.themeColor} direction="horizontal" style={{
                    width: '100%',
                    borderBottom: `1px solid ${data.colors.themeColor}`,
                    borderLeft: 'none',
                    display: 'block'
                }}/>
            </tr>
            <tr>
                <td height={`${TransformFontSize(8, data.fontSize)}`}/>
            </tr>
            <tr>
                <td>
                    <table cellPadding={0} cellSpacing={0} style={{
                        verticalAlign: '-webkit-baseline-middle',
                        fontFamily: `${data.fontFamily}`,
                        width: '100%'
                    }}>
                        <tbody>
                        <tr>
                            <td style={{verticalAlign: 'middle', textAlign: 'left'}}>
                                <table cellPadding={0} cellSpacing={0} style={{
                                    verticalAlign: '-webkit-baseline-middle',
                                    fontFamily: `${data.fontFamily}`,
                                    display: 'inline-block'
                                }}>
                                    <tbody>
                                    <tr style={{textAlign: 'right'}}>
                                        <td>
                                            {(data.socialLinks.facebook.text && data.socialLinks.facebook.status !== 'invisible') && (
                                                <>
                                                    <a href={data.socialLinks.facebook.text} color="#6A78D1" style={{
                                                        display: 'inline-block',
                                                        padding: '0px',
                                                        backgroundColor: `${data.colors.themeColor}`
                                                    }}>
                                                        <img height={`${TransformFontSize(24, data.fontSize)}`}
                                                             src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png"
                                                             alt="facebook" color={data.colors.themeColor} style={{
                                                            backgroundColor: `${data.colors.themeColor}`,
                                                            maxWidth: `${TransformFontSize(135, data.fontSize)}`,
                                                            display: 'block'
                                                        }}/>
                                                    </a>
                                                    <span style={{width: `${TransformFontSize(8, data.fontSize)}`, display: 'inline-block'}}></span>
                                                </>
                                            )}
                                        </td>

                                        <td>
                                            {(data.socialLinks.twitter.text && data.socialLinks.twitter.status !== 'invisible') && (
                                                <>
                                                    <a href={data.socialLinks.twitter.text} color="#6A78D1" style={{
                                                        display: 'inline-block',
                                                        padding: '0px',
                                                        backgroundColor: `${data.colors.themeColor}`
                                                    }}>
                                                        <img height={`${TransformFontSize(24, data.fontSize)}`}
                                                             src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png"
                                                             alt="twitter" color={data.colors.themeColor} style={{
                                                            backgroundColor: `${data.colors.themeColor}`,
                                                            maxWidth: `${TransformFontSize(135, data.fontSize)}`,
                                                            display: 'block'
                                                        }}/>
                                                    </a>
                                                    <span style={{width: `${TransformFontSize(8, data.fontSize)}`, display: 'inline-block'}}></span>
                                                </>
                                            )}
                                        </td>

                                        <td>
                                            {data.socialLinks.linkedin.text && data.socialLinks.linkedin.status !== 'invisible' && (
                                                <>
                                                    <a href={data.socialLinks.linkedin.text} color="#6A78D1" style={{
                                                        display: 'inline-block',
                                                        padding: '0px',
                                                        backgroundColor: `${data.colors.themeColor}`
                                                    }}>
                                                        <img height={`${TransformFontSize(24, data.fontSize)}`}
                                                             src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
                                                             alt="linkedin" color={data.colors.themeColor} style={{
                                                            backgroundColor: `${data.colors.themeColor}`,
                                                            maxWidth: `${TransformFontSize(135, data.fontSize)}`,
                                                            display: 'block'
                                                        }}/>
                                                    </a>
                                                    <span style={{width: `${TransformFontSize(8, data.fontSize)}`, display: 'inline-block'}}></span>
                                                </>
                                            )}
                                        </td>
                                        <td>
                                            {data.socialLinks.instagram.text && data.socialLinks.instagram.status !== 'invisible' && (
                                                <a href={data.socialLinks.instagram.text} color="#6A78D1" style={{
                                                    display: 'inline-block',
                                                    padding: '0px',
                                                    backgroundColor: `${data.colors.themeColor}`
                                                }}>
                                                    <img height={`${TransformFontSize(24, data.fontSize)}`}
                                                         src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png"
                                                         alt="instagram" color={data.colors.themeColor} style={{
                                                        backgroundColor: `${data.colors.themeColor}`,
                                                        maxWidth: `${TransformFontSize(135, data.fontSize)}`,
                                                        display: 'block'
                                                    }}/>
                                                </a>
                                            )}
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>

                            {data.companyLogo && data.imageCompany &&(
                                <td style={{verticalAlign: 'top', textAlign: 'right'}}>
                                    <img alt="" width={`${TransformFontSize(90, data.fontSize)}`} src={data.companyLogo} role="presentation"
                                         style={{maxWidth: `${TransformFontSize(90, data.fontSize)}`, display: 'inline', textAlign: 'left'}}/>
                                </td>
                            )}

                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td height={`${TransformFontSize(30, data.fontSize)}`}/>
            </tr>
            </tbody>
        </table>
    )
}
