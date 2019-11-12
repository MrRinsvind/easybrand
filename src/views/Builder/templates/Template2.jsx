import React from 'react'

import { TransformFontSize } from 'common/utils/helpers'

export default function Template2({data}) {
    return (
        <table id="copyTemplate" cellPadding={0} cellSpacing={0}
               style={{verticalAlign: '-webkit-baseline-middle', fontFamily: `${data.fontFamily}`}}>
            <tbody>
            <tr>
                <td>
                    <table cellPadding={0} cellSpacing={0}
                           style={{verticalAlign: '-webkit-baseline-middle', fontFamily: `${data.fontFamily}`}}>
                        <tbody>
                        <tr>
                            {data.profilePhoto && data.profilePicture && (
                                <>
                                    <td style={{verticalAlign: 'top'}}>
                                        <table cellPadding={0} cellSpacing={0} style={{
                                            verticalAlign: '-webkit-baseline-middle',
                                            fontFamily: `${data.fontFamily}`
                                        }}>
                                            <tbody>
                                            <tr>
                                                <td style={{textAlign: 'center'}}>
                                                    <img alt="" width={`${TransformFontSize(90, data.fontSize)}`} src={data.profilePhoto}
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
                                            {((data.firstName.text && data.firstName.status !== 'invisible') || (data.lastName.text && data.lastName.status !== 'invisible')) && (
                                                <table cellPadding={0} cellSpacing={0}>
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <h3 color="#000" style={{
                                                                margin: '0px',
                                                                fontSize: `${TransformFontSize(20, data.fontSize)}`,
                                                                color: `${data.colors.textColor}`,
                                                                fontFamily: `${data.fontFamily}`,
                                                                paddingRight: `${TransformFontSize(8, data.fontSize)}`
                                                            }}>
                                                                { data.firstName.status !== 'invisible' && (`${data.firstName.text} `) }
                                                                { data.lastName.status !== 'invisible' && (`${data.lastName.text}`) }
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

                                            {((data.companyName.text && data.companyName.status !== 'invisible') || (data.department.text && data.department.status !== 'invisible')) && (
                                                <table cellPadding={0} cellSpacing={0}>
                                                    <tbody>
                                                    <tr>
                                                        {(data.companyName.text && data.companyName.status !== 'invisible') && (
                                                            <td>
                                                                <p color={data.colors.textColor} style={{
                                                                    margin: '0px',
                                                                    padding: '0',
                                                                    fontFamily: `${data.fontFamily}`,
                                                                    fontSize: `${TransformFontSize(14, data.fontSize)}`,
                                                                    color: `${data.colors.textColor}`,
                                                                    opacity: 0.4
                                                                }}>
                                                                    <span style={{fontFamily: `${data.fontFamily}`}}>{data.companyName.text}</span>
                                                                </p>
                                                            </td>
                                                        )}
                                                        {(data.companyName.text && data.companyName.status !== 'invisible') && (data.department.text && data.department.status !== 'invisible') && (
                                                            <td>
                                                                <span color={data.colors.textColor} style={{
                                                                    padding: '0',
                                                                    paddingRight: `${TransformFontSize(8, data.fontSize)}`,
                                                                    paddingLeft: `${TransformFontSize(8, data.fontSize)}`,
                                                                    fontWeight: '100',
                                                                    fontFamily: `${data.fontFamily}`,
                                                                    fontSize: `${TransformFontSize(14, data.fontSize)}`,
                                                                    color: `${data.colors.textColor}`,
                                                                    opacity: 0.4,
                                                                }}>|</span>
                                                            </td>
                                                        )}
                                                        {(data.department.text && data.department.status !== 'invisible') && (
                                                            <td>
                                                                <p color={data.colors.textColor} style={{
                                                                    margin: '0px',
                                                                    fontFamily: `${data.fontFamily}`,
                                                                    fontSize: `${TransformFontSize(14, data.fontSize)}`,
                                                                    color: `${data.colors.textColor}`,
                                                                    opacity: 0.4
                                                                }}>
                                                                    <span style={{fontFamily: `${data.fontFamily}`}}>{data.department.text}</span>
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

                                            {(data.jobTitle.text && data.jobTitle.status !== 'invisible' ) && (
                                                <table cellPadding={0} cellSpacing={0}>
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <p color="#000" style={{
                                                                margin: '0px',
                                                                fontSize: `${TransformFontSize(16, data.fontSize)}`,
                                                                fontFamily: `${data.fontFamily}`,
                                                                lineHeight: `${TransformFontSize(24, data.fontSize)}`,
                                                                color: `${data.colors.textColor}`
                                                            }}>
                                                                <span style={{fontFamily: `${data.fontFamily}`}}>{data.jobTitle.text}</span>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            )}
                                        </td>
                                        {data.companyLogo && data.imageCompany && (
                                            <td style={{textAlign: 'center', verticalAlign: 'bottom'}}>
                                                <img alt="" width={`${TransformFontSize(90, data.fontSize)}`} src={data.companyLogo} style={{maxWidth: `${TransformFontSize(90, data.fontSize)}`, float: 'right', display: 'block'}}/>
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
                                    fontFamily: `${data.fontFamily}`,
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
                                                            {( (data.mobileNumber.text && data.mobileNumber.status !== 'invisible')  || (data.officeNumber.text && data.officeNumber.status !== 'invisible')) && (
                                                                <tr height={`${TransformFontSize(25, data.fontSize)}`} style={{verticalAlign: 'middle'}}>
                                                                    <td width={`${TransformFontSize(30, data.fontSize)}`} style={{verticalAlign: 'middle'}}>
                                                                        <table cellPadding={0} cellSpacing={0} style={{
                                                                            verticalAlign: '-webkit-baseline-middle',
                                                                            fontFamily: `${data.fontFamily}`
                                                                        }}>
                                                                            <tbody>
                                                                            <tr>
                                                                                <td style={{verticalAlign: 'bottom'}}>
                                                                                            <img alt="" width={`${TransformFontSize(13, data.fontSize)}`}
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
                                                                                    <p style={{padding: '0', margin: '0'}}>
                                                                                        {(data.officeNumber.text && data.officeNumber.status !== 'invisible') && (
                                                                                            <>
                                                                                                <a href={`tel:${data.officeNumber.text}`}
                                                                                                   color={data.colors.linkColor}
                                                                                                   style={{
                                                                                                       textDecoration: 'none',
                                                                                                       color: `${data.colors.linkColor}`,
                                                                                                       fontSize: `${TransformFontSize(12, data.fontSize)}`,
                                                                                                       fontFamily: `${data.fontFamily}`
                                                                                                   }}>
                                                                                                    <span style={{fontFamily: `${data.fontFamily}`}}>{data.officeNumber.text}</span>
                                                                                                </a>
                                                                                                {(data.mobileNumber.text && data.mobileNumber.status !== 'invisible') && (
                                                                                                    <span style={{
                                                                                                        color: `${data.colors.linkColor}`,
                                                                                                        fontSize: `${TransformFontSize(12, data.fontSize)}`,
                                                                                                        padding: '0',
                                                                                                        paddingRight: `${TransformFontSize(5, data.fontSize)}`,
                                                                                                        paddingLeft: `${TransformFontSize(5, data.fontSize)}`,
                                                                                                        fontFamily: `${data.fontFamily}`
                                                                                                    }}> | </span>
                                                                                                )}
                                                                                            </>
                                                                                        )}
                                                                                        {(data.mobileNumber.text && data.mobileNumber.status !== 'invisible') && (
                                                                                            <a href={`tel:${data.mobileNumber.text}`}
                                                                                               color={data.colors.linkColor}
                                                                                               style={{
                                                                                                   textDecoration: 'none',
                                                                                                   color: `${data.colors.linkColor}`,
                                                                                                   fontSize: `${TransformFontSize(12, data.fontSize)}`,
                                                                                                   fontFamily: `${data.fontFamily}`
                                                                                               }}>
                                                                                                <span style={{fontFamily: `${data.fontFamily}`}}>{data.mobileNumber.text}</span>
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
                                                            {(data.email.text && data.email.status !== 'invisible' ) && (
                                                                <tr height={`${TransformFontSize(25, data.fontSize)}`} style={{verticalAlign: 'middle'}}>
                                                                    <td width={`${TransformFontSize(30, data.fontSize)}`} style={{verticalAlign: 'middle'}}>
                                                                        <table cellPadding={0} cellSpacing={0} style={{
                                                                            verticalAlign: '-webkit-baseline-middle',
                                                                            fontFamily: `${data.fontFamily}`
                                                                        }}>
                                                                            <tbody>
                                                                            <tr>
                                                                                <td style={{verticalAlign: 'bottom'}}>
                                                                                <img alt="" width={`${TransformFontSize(13, data.fontSize)}`}
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
                                                                        <a href={`mailto:${data.email.text}`}
                                                                           color={data.colors.linkColor} style={{
                                                                            textDecoration: 'none',
                                                                            color: `${data.colors.linkColor}`,
                                                                            fontSize: `${TransformFontSize(12, data.fontSize)}`,
                                                                            fontFamily: `${data.fontFamily}`
                                                                        }}>
                                                                            <span style={{fontFamily: `${data.fontFamily}`}}>{data.email.text}</span>
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
                                                            fontFamily: `${data.fontFamily}`
                                                        }}>
                                                            <tbody>
                                                            <tr>
                                                                <td>
                                                                    {(data.socialLinks.facebook.text && data.socialLinks.facebook.status !== 'invisible') && (
                                                                        <>
                                                                            <a href={data.socialLinks.facebook.text}
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
                                                                    {(data.socialLinks.twitter.text && data.socialLinks.twitter.status !== 'invisible') && (
                                                                        <>
                                                                            <a href={data.socialLinks.twitter.text}
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
                                                                    {(data.socialLinks.linkedin.text && data.socialLinks.linkedin.status !== 'invisible') && (
                                                                        <>
                                                                            <a href={data.socialLinks.linkedin.text}
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
                                                                    {(data.socialLinks.instagram.text && data.socialLinks.instagram.status !== 'invisible') && (
                                                                        <a href={data.socialLinks.instagram.text}
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
                                                    { data.addresses.filter((address) => { return address.text && address.status !== 'invisible'}).length > 0 && (
                                                        <td style={{padding: '0px'}}>
                                                            <p color={data.color} style={{
                                                                margin: 0,
                                                                textDecoration: 'none',
                                                                color: `${data.colors.textColor}`,
                                                                fontSize: `${TransformFontSize(12, data.fontSize)}`
                                                            }}>
                                                                {data.addresses.map((address, id) => {
                                                                    if(address.text && address.status !== 'invisible'){
                                                                        let prefix = (id + 1 !== data.addresses.length) &&
                                                                        (data.addresses.some((adr, adrInd) => adrInd > id && adr.status !== 'invisible')) ?
                                                                            <span>, </span> :
                                                                            null
                                                                        return <React.Fragment key={address.text + id}>{address.text}{prefix}</React.Fragment>
                                                                    } else {
                                                                        return null
                                                                    }
                                                                })}
                                                            </p>
                                                        </td>
                                                    )}
                                                </tr>


                                                {/*  link  */}
                                                {(data.websiteUrl.text && data.websiteUrl.status !== 'invisible') && (
                                                    <tr height={`${TransformFontSize(25, data.fontSize)}`}>
                                                        <td width={`${TransformFontSize(30, data.fontSize)}`} style={{verticalAlign: 'middle'}}>
                                                            <table cellPadding={0} cellSpacing={0} style={{
                                                                verticalAlign: '-webkit-baseline-middle',
                                                                fontFamily: `${data.fontFamily}`
                                                            }}>
                                                                <tbody>
                                                                <tr>
                                                                    <td style={{verticalAlign: 'bottom'}}>
                                                                        <img alt="" width={`${TransformFontSize(13, data.fontSize)}`}
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
                                                                   fontSize: `${TransformFontSize(12, data.fontSize)}`,
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
                        </tbody>
                    </table>
                </td>
            </tr>
            </tbody>
        </table>
    )
}
