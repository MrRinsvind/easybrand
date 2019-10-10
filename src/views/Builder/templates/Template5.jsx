import React from 'react'

import { TransformFontSize } from 'common/utils/helpers'

export default function Template5({data}) {
    return (
        <table id="template5" cellPadding={0} cellSpacing={0} style={{
            verticalAlign: '-webkit-baseline-middle',
            fontFamily: `${data.fontFamily}`,
            width: `${TransformFontSize(382, data.fontSize)}`
        }}>
            <tbody>
            <tr>
                <td>
                    <table cellPadding={0} cellSpacing={0} style={{
                        verticalAlign: '-webkit-baseline-middle',
                        fontFamily: `${data.fontFamily}`,
                        width: '100%'
                    }}>
                        <tbody>
                        <tr>
                            <td>
                                {(( data.firstName.text && data.firstName.status !== 'invisible') || (data.lastName.text && data.lastName.status !== 'invisible')) && (
                                    <h2 style={{
                                        margin: 0,
                                        paddingBottom: `${TransformFontSize(5, data.fontSize)}`,
                                        fontSize: `${TransformFontSize(20, data.fontSize)}`,
                                        fontFamily: `${data.fontFamily}`,
                                        color: `${data.colors.textColor}`
                                    }}>
                                        { data.firstName.status !== 'invisible' && (`${data.firstName.text} `) }
                                        { data.lastName.status !== 'invisible' && (`${data.lastName.text}`) }
                                    </h2>
                                )}

                                {data.jobTitle.text && data.jobTitle.status !== 'invisible' && (
                                    <p style={{
                                        margin: 0,
                                        paddingBottom: `${TransformFontSize(10, data.fontSize)}`,
                                        fontSize: `${TransformFontSize(14, data.fontSize)}`,
                                        fontFamily: `${data.fontFamily}`,
                                        color: `${data.colors.textColor}`
                                    }}>
                                        <span style={{fontFamily: `${data.fontFamily}`}}>{data.jobTitle.text}</span>
                                    </p>
                                )}

                                {( (data.companyName.text && data.companyName.status !== 'invisible' )|| (data.department.text && data.department.status !== 'invisible')) && (
                                    <p style={{
                                        margin: 0,
                                        fontSize: `${TransformFontSize(14, data.fontSize)}`,
                                        color: `${data.colors.textColor}`,
                                        fontFamily: `${data.fontFamily}`,
                                        opacity: 0.5
                                    }}>
                                        {data.companyName.text && data.companyName.status !== 'invisible' && (
                                            <>
                                                <span style={{fontFamily: `${data.fontFamily}`}}>{data.companyName.text}</span>
                                                <span
                                                    style={{padding: `0 ${TransformFontSize(5, data.fontSize)}`}}>|</span>
                                            </>
                                        )}
                                        <span style={{fontFamily: `${data.fontFamily}`}}>{data.department.text}</span>
                                    </p>
                                )}

                            </td>
                            {data.profilePhoto && (
                                <td style={{textAlign: 'right'}}>
                                  <span style={{display: 'inline-block', textAlign: 'right', width: '100%'}}>
                                    <img width={`${TransformFontSize(90, data.fontSize)}`} src={data.profilePhoto}
                                         role="presentation"
                                         style={{
                                             maxWidth: `${TransformFontSize(130, data.fontSize)}`,
                                             display: 'inline',
                                             textAlign: 'right'
                                         }}/>
                                  </span>
                                </td>
                            )}
                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td height={`${TransformFontSize(15, data.fontSize)}`}/>
            </tr>
            <tr>
                <td height={`${TransformFontSize(2, data.fontSize)}`} direction="horizontal" style={{
                    width: '100%',
                    borderBottom: `1px solid ${data.colors.themeColor}`,
                    borderLeft: 'none',
                    display: 'block'
                }}/>
            </tr>
            <tr>
                <td height={`${TransformFontSize(23, data.fontSize)}`}/>
            </tr>
            <tr>
                <td style={{verticalAlign: 'middle'}}>
                    <table cellPadding={0} cellSpacing={0}
                           style={{verticalAlign: '-webkit-baseline-middle', fontFamily: `${data.fontFamily}`}}>
                        <tbody>
                        <tr>
                            <td>
                                <table cellPadding={0} cellSpacing={0} style={{
                                    verticalAlign: '-webkit-baseline-middle',
                                    fontFamily: `${data.fontFamily}`
                                }}>
                                    <tbody>

                                    { data.addresses.filter((address) => { return address.text && address.status !== 'invisible'}).length > 0 && (
                                        <tr height={`${TransformFontSize(25, data.fontSize)}`}
                                            style={{verticalAlign: 'middle'}}>
                                            <td width={`${TransformFontSize(30, data.fontSize)}`}
                                                style={{verticalAlign: 'middle'}}>
                                                <table cellPadding={0} cellSpacing={0} style={{
                                                    verticalAlign: '-webkit-baseline-middle',
                                                    fontFamily: `${data.fontFamily}`
                                                }}>
                                                    <tbody>
                                                    <tr>
                                                        <td style={{verticalAlign: 'bottom'}}>

                                                            <img width={`${TransformFontSize(13, data.fontSize)}`}
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
                                                    margin: 0,
                                                    fontSize: `${TransformFontSize(12, data.fontSize)}`,
                                                    color: `${data.colors.textColor}`
                                                }}>
                                                    {data.addresses.map((address, id) => {
                                                        if(address.text && address.status !== 'invisible'){
                                                            let prefix = (id + 1 !== data.addresses.length) &&
                                                            (data.addresses.some((adr, adrInd) => adrInd > id && adr.status !== 'invisible')) ?
                                                                <span>, </span> :
                                                                null
                                                            return <>{address.text}{prefix}</>
                                                        } else {
                                                            return null
                                                        }
                                                    })}
                                                </p>
                                            </td>
                                        </tr>
                                    )}

                                    {((data.officeNumber.text && data.officeNumber.status !== 'invisible') || (data.mobileNumber.text && data.mobileNumber.status !== "invisible")) && (
                                        <tr height={`${TransformFontSize(25, data.fontSize)}`}
                                            style={{verticalAlign: 'middle'}}>
                                            <td width={`${TransformFontSize(30, data.fontSize)}`}
                                                style={{verticalAlign: 'middle'}}>
                                                <table cellPadding={0} cellSpacing={0} style={{
                                                    verticalAlign: '-webkit-baseline-middle',
                                                    fontFamily: `${data.fontFamily}`
                                                }}>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{verticalAlign: 'bottom'}}>
                                                                <img width={`${TransformFontSize(13, data.fontSize)}`}
                                                                     src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png"
                                                                     color={data.colors.themeColor} style={{
                                                                    display: 'block',
                                                                    backgroundColor: `${data.colors.themeColor}`
                                                                }}/>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td style={{padding: '0px', color: `${data.colors.linkColor}`}}>
                                                {data.officeNumber.text && data.officeNumber.status !== 'invisible' && (
                                                    <>
                                                        <a href={`tel:${data.officeNumber.text}`}
                                                           color={data.colors.linkColor} style={{
                                                            textDecoration: 'none',
                                                            color: `${data.colors.linkColor}`,
                                                            fontFamily: `${data.fontFamily}`,
                                                            fontSize: `${TransformFontSize(12, data.fontSize)}`
                                                        }}>
                                                            <span style={{fontFamily: `${data.fontFamily}`}}>{data.officeNumber.text}</span>
                                                        </a>
                                                        {data.mobileNumber.text && data.mobileNumber.status !== 'invisible' && (
                                                            <span
                                                                style={{fontFamily: `${data.fontFamily}`, padding: `0 ${TransformFontSize(8, data.fontSize)}`}}>|</span>
                                                        )}
                                                    </>
                                                )}
                                                {data.mobileNumber.text && data.mobileNumber.status !== 'invisible' &&(
                                                    <>
                                                        <a href={`tel:${data.mobileNumber.text}`} color={data.colors.linkColor}
                                                           style={{
                                                               textDecoration: 'none',
                                                               color: `${data.colors.linkColor}`,
                                                               fontFamily: `${data.fontFamily}`,
                                                               fontSize: `${TransformFontSize(12, data.fontSize)}`
                                                           }}>
                                                            <span style={{fontFamily: `${data.fontFamily}`}}>{data.mobileNumber.text}</span>
                                                        </a>
                                                    </>
                                                )}

                                            </td>
                                        </tr>
                                    )}

                                    {data.email.text && (
                                        <tr height={`${TransformFontSize(25, data.fontSize)}`}
                                            style={{verticalAlign: 'middle'}}>
                                            <td width={`${TransformFontSize(30, data.fontSize)}`}
                                                style={{verticalAlign: 'middle'}}>
                                                <table cellPadding={0} cellSpacing={0} style={{
                                                    verticalAlign: '-webkit-baseline-middle',
                                                    fontFamily: `${data.fontFamily}`
                                                }}>
                                                    <tbody>
                                                    <tr>
                                                        <td style={{verticalAlign: 'bottom'}}>
                                                            <img width={`${TransformFontSize(13, data.fontSize)}`}
                                                                 src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png"
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
                                                <a href={`mailto:${data.email.text}`} color={data.colors.linkColor} style={{
                                                    textDecoration: 'none',
                                                    color: `${data.colors.linkColor}`,
                                                    fontFamily: `${data.fontFamily}`,
                                                    fontSize: `${TransformFontSize(12, data.fontSize)}`
                                                }}>
                                                    <span>{data.email.text}</span>
                                                </a>
                                            </td>
                                        </tr>
                                    )}

                                    {data.websiteUrl.text && data.websiteUrl.status !== 'invisible' && (
                                        <tr height={`${TransformFontSize(25, data.fontSize)}`}
                                            style={{verticalAlign: 'middle'}}>
                                            <td width={`${TransformFontSize(30, data.fontSize)}`}
                                                style={{verticalAlign: 'middle'}}>
                                                <table cellPadding={0} cellSpacing={0} style={{
                                                    verticalAlign: '-webkit-baseline-middle',
                                                    fontFamily: `${data.fontFamily}`
                                                }}>
                                                    <tbody>
                                                    <tr>
                                                        <td style={{verticalAlign: 'bottom'}}>
                                                            <img width={`${TransformFontSize(13, data.fontSize)}`}
                                                                 src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png"
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
                                                <a href={data.websiteUrl} color={data.colors.linkColor} style={{
                                                    textDecoration: 'none',
                                                    color: `${data.colors.linkColor}`,
                                                    fontFamily: `${data.fontFamily}`,
                                                    fontSize: `${TransformFontSize(12, data.fontSize)}`
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
                <td height={`${TransformFontSize(16, data.fontSize)}`}/>
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
                                        {data.socialLinks.facebook.text && data.socialLinks.facebook.status !== 'invisible' && (
                                            <td>
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
                                                    <span style={{
                                                        width: `${TransformFontSize(8, data.fontSize)}`,
                                                        display: 'inline-block'
                                                    }}></span>
                                                </>
                                            </td>
                                        )}

                                        {data.socialLinks.twitter.text && data.socialLinks.twitter.status !== 'invisible' && (
                                            <td>
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
                                                    <span style={{
                                                        width: `${TransformFontSize(8, data.fontSize)}`,
                                                        display: 'inline-block'
                                                    }}></span>
                                                </>
                                            </td>
                                        )}

                                        {data.socialLinks.linkedin.text && data.socialLinks.linkedin.status !== 'invisible' && (
                                            <td>
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
                                                    <span style={{
                                                        width: `${TransformFontSize(8, data.fontSize)}`,
                                                        display: 'inline-block'
                                                    }}></span>
                                                </>
                                            </td>
                                        )}


                                        {data.socialLinks.instagram.text && data.socialLinks.instagram.status !== 'invisible' && (
                                            <td>
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
                                            </td>
                                        )}
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                            {data.companyLogo && (
                                <td style={{verticalAlign: 'top', textAlign: 'right'}}>
                                    <img width={`${TransformFontSize(90, data.fontSize)}`} src={data.companyLogo}
                                         role="presentation"
                                         style={{
                                             maxWidth: `${TransformFontSize(90, data.fontSize)}`,
                                             display: 'inline',
                                             textAlign: 'left'
                                         }}/>
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
