import React from 'react'

import { TransformFontSize } from 'common/utils/helpers'

export default function Template2({data}) {
    return (
        <table id="template2" cellPadding={0} cellSpacing={0}
               style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
            <tbody>
            <tr>
                <td>
                    <table cellPadding={0} cellSpacing={0}
                           style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
                        <tbody>
                        <tr>
                            {data.profilePhoto && (
                                <>
                                    <td style={{verticalAlign: 'top'}}>
                                        <table cellPadding={0} cellSpacing={0} style={{
                                            verticalAlign: '-webkit-baseline-middle',
                                            fontSize: 'medium',
                                            fontFamily: 'Arial'
                                        }}>
                                            <tbody>
                                            <tr>
                                                <td style={{textAlign: 'center'}}>
                                                    <img width={`${TransformFontSize(90, data.fontSize)}`} src={data.profilePhoto}
                                                         style={{maxWidth: `${TransformFontSize(90, data.fontSize)}`, display: 'block'}}/>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td width="20px"/>
                                </>
                            )}
                            {/* third column */}
                            <td style={{padding: '0px', verticalAlign: 'top'}}>
                                <table style={{width: '100%'}}>
                                    <tbody>
                                    <tr>
                                        <td>
                                            {(data.firstName || data.lastName) && (
                                                <table cellPadding={0} cellSpacing={0}>
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <h3 color="#000" style={{
                                                                margin: '0px',
                                                                fontSize: `${TransformFontSize(20, data.fontSize)}`,
                                                                color: `${data.colors.textColor}`,
                                                                paddingRight: `${TransformFontSize(8, data.fontSize)}`
                                                            }}>
                                                                {`${data.firstName} ${data.lastName}`}
                                                            </h3>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div style={{height: `${TransformFontSize(8, data.fontSize)}`}}></div>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            )}

                                            {(data.companyName || data.department) && (
                                                <table cellPadding={0} cellSpacing={0}>
                                                    <tbody>
                                                    <tr>
                                                        {data.companyName && (
                                                            <td>
                                                                <p color={data.colors.textColor} style={{
                                                                    margin: '0px',
                                                                    padding: '0',
                                                                    fontSize: `${TransformFontSize(14, data.fontSize)}`,
                                                                    color: `${data.colors.textColor}`,
                                                                    opacity: 0.4
                                                                }}>
                                                                    <span>{data.companyName}</span>
                                                                </p>
                                                            </td>
                                                        )}
                                                        {data.companyName && data.department && (
                                                            <td>
                                                                <span color={data.colors.textColor} style={{
                                                                    padding: '0',
                                                                    paddingRight: `${TransformFontSize(8, data.fontSize)}`,
                                                                    paddingLeft: `${TransformFontSize(8, data.fontSize)}`,
                                                                    fontWeight: '100',
                                                                    fontSize: `${TransformFontSize(14, data.fontSize)}`,
                                                                    color: `${data.colors.textColor}`,
                                                                    opacity: 0.4,
                                                                }}>|</span>
                                                            </td>
                                                        )}
                                                        {data.department && (
                                                            <td>
                                                                <p color={data.colors.textColor} style={{
                                                                    margin: '0px',
                                                                    fontSize: `${TransformFontSize(14, data.fontSize)}`,
                                                                    color: `${data.colors.textColor}`,
                                                                    opacity: 0.4
                                                                }}>
                                                                    <span>{data.department}</span>
                                                                </p>
                                                            </td>
                                                        )}
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div style={{height: `${TransformFontSize(8, data.fontSize)}`}}></div>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            )}

                                            {data.jobTitle && (
                                                <table cellPadding={0} cellSpacing={0}>
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <p color="#000" style={{
                                                                margin: '0px',
                                                                fontSize: `${TransformFontSize(16, data.fontSize)}`,
                                                                lineHeight: `${TransformFontSize(24, data.fontSize)}`,
                                                                color: `${data.colors.textColor}`
                                                            }}>
                                                                <span>{data.jobTitle}</span>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            )}
                                        </td>
                                        {data.companyLogo && (
                                            <td style={{textAlign: 'center', verticalAlign: 'bottom'}}>
                                                <img width={`${TransformFontSize(90, data.fontSize)}`} src={data.companyLogo}
                                                     style={{maxWidth: `${TransformFontSize(90, data.fontSize)}`, float: 'right', display: 'block'}}/>
                                            </td>
                                        )}
                                    </tr>
                                    <tr>
                                        <td style={{height: `${TransformFontSize(16, data.fontSize)}`}}/>
                                    </tr>
                                    </tbody>
                                </table>
                                {/*  Content  */}
                                <table cellPadding={0} cellSpacing={0} style={{
                                    verticalAlign: '-webkit-baseline-middle',
                                    fontSize: 'medium',
                                    fontFamily: 'Arial',
                                    borderTop: `solid 1px ${data.colors.themeColor}`
                                }}>
                                    <tbody>
                                    <tr>
                                        <td style={{height: `${TransformFontSize(16, data.fontSize)}`}}/>
                                    </tr>
                                    <tr>
                                        <td>
                                            <table>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <table>
                                                            <tbody>
                                                            {/* phone */}
                                                            {(data.mobileNumber || data.officeNumber) && (
                                                                <tr height={`${TransformFontSize(25, data.fontSize)}`} style={{verticalAlign: 'middle'}}>

                                                                    <td width={`${TransformFontSize(30, data.fontSize)}`} style={{verticalAlign: 'middle'}}>
                                                                        <table cellPadding={0} cellSpacing={0} style={{
                                                                            verticalAlign: '-webkit-baseline-middle',
                                                                            fontSize: 'medium',
                                                                            fontFamily: 'Arial'
                                                                        }}>
                                                                            <tbody>
                                                                            <tr>
                                                                                <td style={{verticalAlign: 'bottom'}}>

                                                                                            <img width={`${TransformFontSize(13, data.fontSize)}`}
                                                                                                 src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png"
                                                                                                 color={data.colors.themeColor}
                                                                                                 style={{
                                                                                                     display: 'block',
                                                                                                     backgroundColor: `${data.colors.themeColor}`
                                                                                                 }}/>
                                                                                </td>
                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>

                                                                    <td style={{
                                                                        padding: '0px',
                                                                        color: 'rgb(239, 43, 43)'
                                                                    }}>
                                                                        <table cellPadding={0} cellSpacing={0}>
                                                                            <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <p style={{
                                                                                        padding: '0',
                                                                                        margin: '0'
                                                                                    }}>
                                                                                        {data.officeNumber && (
                                                                                            <>
                                                                                                <a href={`tel:${data.officeNumber}`}
                                                                                                   color={data.colors.linkColor}
                                                                                                   style={{
                                                                                                       textDecoration: 'none',
                                                                                                       color: `${data.colors.linkColor}`,
                                                                                                       fontSize: `${TransformFontSize(12, data.fontSize)}`
                                                                                                   }}>
                                                                                                    <span>{data.officeNumber}</span>
                                                                                                </a>
                                                                                                {data.mobileNumber && (
                                                                                                    <span style={{
                                                                                                        color: `${data.colors.linkColor}`,
                                                                                                        fontSize: `${TransformFontSize(12, data.fontSize)}`,
                                                                                                        padding: '0',
                                                                                                        paddingRight: `${TransformFontSize(5, data.fontSize)}`,
                                                                                                        paddingLeft: `${TransformFontSize(5, data.fontSize)}`
                                                                                                    }}> | </span>
                                                                                                )}
                                                                                            </>
                                                                                        )}
                                                                                        {data.mobileNumber && (
                                                                                            <a href={`tel:${data.mobileNumber}`}
                                                                                               color={data.colors.linkColor}
                                                                                               style={{
                                                                                                   textDecoration: 'none',
                                                                                                   color: `${data.colors.linkColor}`,
                                                                                                   fontSize: `${TransformFontSize(12, data.fontSize)}`
                                                                                               }}>
                                                                                                <span>{data.mobileNumber}</span>
                                                                                            </a>
                                                                                        )}
                                                                                    </p>
                                                                                </td>
                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            )}

                                                            {/* email */}
                                                            {data.email && (
                                                                <tr height={`${TransformFontSize(25, data.fontSize)}`} style={{verticalAlign: 'middle'}}>
                                                                    <td width={`${TransformFontSize(30, data.fontSize)}`} style={{verticalAlign: 'middle'}}>
                                                                        <table cellPadding={0} cellSpacing={0} style={{
                                                                            verticalAlign: '-webkit-baseline-middle',
                                                                            fontSize: 'medium',
                                                                            fontFamily: 'Arial'
                                                                        }}>
                                                                            <tbody>
                                                                            <tr>
                                                                                <td style={{verticalAlign: 'bottom'}}>
                                                                                <img width={`${TransformFontSize(13, data.fontSize)}`}
                                                                                     src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png"
                                                                                     color={data.colors.themeColor}
                                                                                     style={{
                                                                                         display: 'block',
                                                                                         backgroundColor: `${data.colors.themeColor}`
                                                                                     }}/>

                                                                                </td>
                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                    <td style={{
                                                                        padding: '0px',
                                                                        color: 'rgb(239, 43, 43)'
                                                                    }}>
                                                                        <a href={`mailto:${data.email}`}
                                                                           color={data.colors.linkColor} style={{
                                                                            textDecoration: 'none',
                                                                            color: `${data.colors.linkColor}`,
                                                                            fontSize: `${TransformFontSize(12, data.fontSize)}`
                                                                        }}>
                                                                            <span>{data.email}</span>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            )}
                                                            <tr>
                                                                <td height={`${TransformFontSize(4, data.fontSize)}`}/>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                        <table cellPadding={0} cellSpacing={0} style={{
                                                            verticalAlign: '-webkit-baseline-middle',
                                                            fontSize: 'medium',
                                                            fontFamily: 'Arial'
                                                        }}>
                                                            <tbody>
                                                            <tr>
                                                                <td>
                                                                    {data.socialLinks.facebook && (
                                                                        <>
                                                                            <a href={data.socialLinks.facebook}
                                                                               color="#6A78D1" style={{
                                                                                display: 'inline-block',
                                                                                padding: '0px',
                                                                                backgroundColor: `${data.colors.themeColor}`
                                                                            }}>
                                                                                <img height={`${TransformFontSize(24, data.fontSize)}`}
                                                                                     src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png"
                                                                                     alt="facebook"
                                                                                     color={data.colors.themeColor}
                                                                                     style={{
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
                                                                    )}
                                                                </td>
                                                                <td>
                                                                    {data.socialLinks.twitter && (
                                                                        <>
                                                                            <a href={data.socialLinks.twitter}
                                                                               color="#6A78D1" style={{
                                                                                display: 'inline-block',
                                                                                padding: '0px',
                                                                                backgroundColor: `${data.colors.themeColor}`
                                                                            }}>
                                                                                <img height={`${TransformFontSize(24, data.fontSize)}`}
                                                                                     src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png"
                                                                                     alt="twitter"
                                                                                     color={data.colors.themeColor}
                                                                                     style={{
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
                                                                    )}
                                                                </td>
                                                                <td>
                                                                    {data.socialLinks.linkedin && (
                                                                        <>
                                                                            <a href={data.socialLinks.linkedin}
                                                                               color="#6A78D1" style={{
                                                                                display: 'inline-block',
                                                                                padding: '0px',
                                                                                backgroundColor: `${data.colors.themeColor}`
                                                                            }}>
                                                                                <img height={`${TransformFontSize(24, data.fontSize)}`}
                                                                                     src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
                                                                                     alt="linkedin"
                                                                                     color={data.colors.themeColor}
                                                                                     style={{
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
                                                                    )}
                                                                </td>
                                                                <td>
                                                                    {data.socialLinks.instagram && (
                                                                        <a href={data.socialLinks.instagram}
                                                                           color="#6A78D1" style={{
                                                                            display: 'inline-block',
                                                                            padding: '0px',
                                                                            backgroundColor: `${data.colors.themeColor}`
                                                                        }}>
                                                                            <img height={`${TransformFontSize(24, data.fontSize)}`}
                                                                                 src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png"
                                                                                 alt="instagram"
                                                                                 color={data.colors.themeColor} style={{
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
                                                </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td width="30px">
                                        </td>
                                        <td style={{verticalAlign: 'top'}}>
                                            <table>
                                                <tbody>
                                                {/* address */}
                                                <tr height={`${TransformFontSize(25, data.fontSize)}`}>
                                                    <td width={`${TransformFontSize(30, data.fontSize)}`} style={{verticalAlign: 'middle'}}>
                                                        <table cellPadding={0} cellSpacing={0} style={{
                                                            verticalAlign: '-webkit-baseline-middle',
                                                            fontSize: 'medium',
                                                            fontFamily: 'Arial'
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
                                                    {data.addresses.length > 0 && (
                                                        <td style={{padding: '0px'}}>
                                                            <p color={data.color} style={{
                                                                margin: 0,
                                                                textDecoration: 'none',
                                                                color: `${data.colors.textColor}`,
                                                                fontSize: `${TransformFontSize(12, data.fontSize)}`
                                                            }}>
                                                                {data.addresses && !!data.addresses.length && data.addresses.map((address, id) => {
                                                                    const coma = id + 1 !== data.addresses.length ? ', ' : ''
                                                                    const divider = (id + 1) % 2 == 0 ? (
                                                                        <div style={{height: `${TransformFontSize(4, data.fontSize)}`}}/>) : ''
                                                                    return <><span
                                                                        style={{color: `${data.colors.textColor}`}}>{address}</span>{coma}{divider}</>
                                                                })}
                                                            </p>
                                                        </td>
                                                    )}
                                                </tr>
                                                {/*  link  */}
                                                {data.websiteUrl && (
                                                    <tr height={`${TransformFontSize(25, data.fontSize)}`}>
                                                        <td width={`${TransformFontSize(30, data.fontSize)}`} style={{verticalAlign: 'middle'}}>
                                                            <table cellPadding={0} cellSpacing={0} style={{
                                                                verticalAlign: '-webkit-baseline-middle',
                                                                fontSize: 'medium',
                                                                fontFamily: 'Arial'
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
                                                        <td style={{padding: '0px', color: 'rgb(239, 43, 43)'}}>
                                                            <a href={data.websiteUrl} color={data.colors.linkColor}
                                                               style={{
                                                                   textDecoration: 'none',
                                                                   color: `${data.colors.linkColor}`,
                                                                   fontSize: `${TransformFontSize(12, data.fontSize)}`
                                                               }}>
                                                                <span>{data.websiteUrl}</span>
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
                        </tbody>
                    </table>
                </td>
            </tr>
            </tbody>
        </table>
    )
}
