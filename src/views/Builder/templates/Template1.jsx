import React from 'react'

import { TransformFontSize } from 'common/utils/helpers'

export default function Template1({data}) {

    return (
        <table id="template1" cellPadding={0} cellSpacing={0}
               style={{verticalAlign: '-webkit-baseline-middle', fontFamily: `${data.fontFamily}`}}>
            <tbody>
            <tr>
                <td>
                    <table cellPadding={0} cellSpacing={0}
                           style={{verticalAlign: '-webkit-baseline-middle', fontFamily: `${data.fontFamily}`}}>
                        <tbody>
                        <tr>
                            {(data.profilePhoto && data.profilePicture) || (data.companyLogo && data.imageCompany) || (data.socialLinks.facebook.text && data.socialLinks.facebook.status !== 'invisible') || (data.socialLinks.twitter.text && data.socialLinks.twitter.status !== 'invisible') || (data.socialLinks.instagram.text && data.socialLinks.instagram.status !== 'invisible') || (data.socialLinks.linkedin.text && data.socialLinks.linkedin.status !== 'invisible') ? (
                                <React.Fragment>
                                    <td style={{verticalAlign: 'top'}}>
                                        <table cellPadding={0} cellSpacing={0} style={{
                                            verticalAlign: '-webkit-baseline-middle',
                                            fontFamily: `${data.fontFamily}`,
                                            width: `${TransformFontSize(180, data.fontSize)}`
                                        }}>
                                            <tbody>

                                            {data.profilePhoto && data.profilePicture && (
                                                <React.Fragment>
                                                    <tr>
                                                        <td style={{textAlign: 'center'}}>
                                                            <p style={{textAlign: 'center', margin: 0}}>
                                                                <img alt="" src={data.profilePhoto}
                                                                     style={{maxWidth: `${TransformFontSize(90, data.fontSize)}`}}/>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td height={`${TransformFontSize(15, data.fontSize)}`}/>
                                                    </tr>
                                                </React.Fragment>
                                            )}

                                            {data.companyLogo && data.imageCompany && (
                                                <React.Fragment>
                                                    <tr>
                                                        <td style={{textAlign: 'center'}}>
                                                            <p style={{textAlign: 'center', margin: 0}}>
                                                                <img alt="" width={`${TransformFontSize(90, data.fontSize)}`}
                                                                     src={data.companyLogo}
                                                                     style={{maxWidth: `${TransformFontSize(90, data.fontSize)}`}}/>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td height={`${TransformFontSize(15, data.fontSize)}`}/>
                                                    </tr>
                                                </React.Fragment>
                                            )}

                                            <tr>
                                                <td style={{textAlign: 'center'}}>
                                                    <table cellPadding={0} cellSpacing={0} style={{
                                                        verticalAlign: '-webkit-baseline-middle',
                                                        fontFamily: `${data.fontFamily}`,
                                                        display: 'inline-block'
                                                    }}>
                                                        <tbody>
                                                        <tr style={{textAlign: 'center'}}>
                                                            <td>
                                                                {data.socialLinks.facebook.text && data.socialLinks.facebook.status !== 'invisible' && (
                                                                    <React.Fragment>
                                                                        <a href={data.socialLinks.facebook.text}
                                                                           color={data.colors.themeColor} style={{
                                                                            display: 'inline-block',
                                                                            padding: '0px',
                                                                            backgroundColor: `${data.colors.themeColor}`
                                                                        }}>
                                                                            <img
                                                                                height={`${TransformFontSize(24, data.fontSize)}`}
                                                                                src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png"
                                                                                alt="facebook" color="#6A78D1" style={{
                                                                                backgroundColor: `${data.colors.themeColor}`,
                                                                                maxWidth: `${TransformFontSize(135, data.fontSize)}`,
                                                                                display: 'block'
                                                                            }}/>
                                                                        </a>
                                                                        <span style={{
                                                                            width: `${TransformFontSize(8, data.fontSize)}`,
                                                                            display: 'inline-block'
                                                                        }}/>
                                                                    </React.Fragment>
                                                                )}
                                                            </td>
                                                            <td>
                                                                {data.socialLinks.twitter.text && data.socialLinks.twitter.status !== 'invisible' &&(
                                                                    <React.Fragment>
                                                                        <a href={data.socialLinks.twitter.text}
                                                                           color={data.colors.themeColor} style={{
                                                                            display: 'inline-block',
                                                                            padding: '0px',
                                                                            backgroundColor: `${data.colors.themeColor}`
                                                                        }}>
                                                                            <img
                                                                                height={`${TransformFontSize(24, data.fontSize)}`}
                                                                                src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png"
                                                                                alt="twitter"
                                                                                color={data.colors.themeColor} style={{
                                                                                backgroundColor: `${data.colors.themeColor}`,
                                                                                maxWidth: `${TransformFontSize(135, data.fontSize)}`,
                                                                                display: 'block'
                                                                            }}/>
                                                                        </a>
                                                                        <span style={{
                                                                            width: `${TransformFontSize(8, data.fontSize)}`,
                                                                            display: 'inline-block'
                                                                        }}/>
                                                                    </React.Fragment>
                                                                )}
                                                            </td>
                                                            <td>
                                                                {data.socialLinks.linkedin.text && data.socialLinks.linkedin.status !== 'invisible' && (
                                                                    <React.Fragment>
                                                                        <a href={data.socialLinks.linkedin}
                                                                           color={data.colors.themeColor} style={{
                                                                            display: 'inline-block',
                                                                            padding: '0px',
                                                                            backgroundColor: `${data.colors.themeColor}`
                                                                        }}>
                                                                            <img
                                                                                height={`${TransformFontSize(24, data.fontSize)}`}
                                                                                src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
                                                                                alt="linkedin"
                                                                                color={data.colors.themeColor} style={{
                                                                                backgroundColor: `${data.colors.themeColor}`,
                                                                                maxWidth: `${TransformFontSize(135, data.fontSize)}`,
                                                                                display: 'block'
                                                                            }}/>
                                                                        </a>
                                                                        <span style={{
                                                                            width: `${TransformFontSize(8, data.fontSize)}`,
                                                                            display: 'inline-block'
                                                                        }}/>
                                                                    </React.Fragment>
                                                                )}
                                                            </td>
                                                            <td>
                                                                {data.socialLinks.instagram.text && data.socialLinks.instagram.status !== 'invisible' && (
                                                                    <a href={data.socialLinks.instagram.text}
                                                                       color={data.colors.themeColor} style={{
                                                                        display: 'inline-block',
                                                                        padding: '0px',
                                                                        backgroundColor: `${data.colors.themeColor}`
                                                                    }}>
                                                                        <img
                                                                            height={`${TransformFontSize(24, data.fontSize)}`}
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
                                    <td width={`${TransformFontSize(5, data.fontSize)}`}
                                        style={{borderRight: `solid 1px ${data.colors.themeColor}`}}>
                                    </td>
                                    <td width={`${TransformFontSize(25, data.fontSize)}`}>
                                    </td>
                                </React.Fragment>
                            ) : ""}
                            <td style={{padding: '0px', verticalAlign: 'top'}}>
                                <table cellPadding={0} cellSpacing={0}>
                                    <tbody>
                                    <tr>
                                        {((data.firstName.text && data.firstName.status !== 'invisible') || (data.lastName.text && data.lastName.status !== 'invisible')) && (
                                            <td>
                                                <p color={data.colors.textColor} style={{
                                                    margin: '0px',
                                                    fontSize: `${TransformFontSize(20, data.fontSize)}`,
                                                    fontWeight: "bold",
                                                    fontFamily: `${data.fontFamily}`,
                                                    color: `${data.colors.textColor}`
                                                }}>
                                                    { data.firstName.status !== 'invisible' && (`${data.firstName.text} `) }
                                                    { data.lastName.status !== 'invisible' && (`${data.lastName.text}`) }
                                                </p>
                                            </td>
                                        )}
                                        {
                                            ((data.firstName.text && data.firstName.status !== 'invisible') || (data.lastName.text && data.lastName.status !== 'invisible')) && (data.jobTitle.text && data.jobTitle.status !== 'invisible') && (
                                                <td>
                                                    <span style={{
                                                        fontSize: `${TransformFontSize(16, data.fontSize)}`,
                                                        fontWeight: 'lighter',
                                                        fontFamily: `${data.fontFamily}`,
                                                        color: `${data.colors.textColor}`,
                                                        padding: `${TransformFontSize(10, data.fontSize)}`
                                                    }}> | </span>
                                                </td>
                                            )
                                        }

                                        {(data.jobTitle.text && data.jobTitle.status !== 'invisible') && (
                                            <td>
                                                <p color={data.colors.textColor} style={{
                                                    margin: '0px',
                                                    fontSize: `${TransformFontSize(16, data.fontSize)}`,
                                                    fontFamily: `${data.fontFamily}`,
                                                    lineHeight: `${TransformFontSize(24, data.fontSize)}`,
                                                    color: `${data.colors.textColor}`
                                                }}>
                                                    <span>{data.jobTitle.text}</span>
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
                                <table cellPadding={0} cellSpacing={0}>
                                    <tbody>
                                    <tr>
                                        {data.companyName.text && data.companyName.status !== 'invisible' && (
                                            <td>
                                                <p color={data.colors.textColor} style={{
                                                    margin: '0px',
                                                    fontSize: `${TransformFontSize(14, data.fontSize)}`,
                                                    color: `${data.colors.textColor}`,
                                                    fontFamily: `${data.fontFamily}`,
                                                    paddingRight: `${TransformFontSize(4, data.fontSize)}`,
                                                    opacity: '0.5'
                                                }}>
                                                    <span style={{fontFamily: `${data.fontFamily}`}}>{data.companyName.text}</span>
                                                </p>
                                            </td>
                                        )}

                                        {data.companyName.text && data.companyName.status !== 'invisible' && data.department.text && data.department.status !== 'invisible' && (
                                            <td>
                                                <span style={{
                                                    padding: '0',
                                                    paddingLeft: `${TransformFontSize(8, data.fontSize)}`,
                                                    paddingRight: `${TransformFontSize(12, data.fontSize)}`,
                                                    fontWeight: '100',
                                                    fontFamily: `${data.fontFamily}`,
                                                    fontSize: `${TransformFontSize(14, data.fontSize)}`,
                                                    color: `${data.colors.textColor}`,
                                                    opacity: '0.5'
                                                }}>|</span>
                                            </td>
                                        )}

                                        {data.department.text && data.department.status !== 'invisible' && (
                                            <td>
                                                <p color={data.colors.textColor} style={{
                                                    margin: '0px',
                                                    fontFamily: `${data.fontFamily}`,
                                                    fontSize: `${TransformFontSize(14, data.fontSize)}`,
                                                    color: `${data.colors.textColor}`,
                                                    opacity: '0.5'
                                                }}>
                                                    <span style={{fontFamily: `${data.fontFamily}`}}>{data.department.text}</span>
                                                </p>
                                            </td>
                                        )}
                                    </tr>
                                    </tbody>
                                </table>
                                <table cellPadding={0} cellSpacing={0} style={{
                                    verticalAlign: '-webkit-baseline-middle',
                                    fontFamily: `${data.fontFamily}`
                                }}>
                                    <tbody>
                                    <tr>
                                        <td height={`${TransformFontSize(8, data.fontSize)}`}/>
                                    </tr>

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
                                                                         alt="" src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png"
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
                                                            textDecoration: 'none',
                                                            fontFamily: `${data.fontFamily}`,
                                                            color: `${data.colors.textColor}`,
                                                            fontSize: `${TransformFontSize(12, data.fontSize)}`
                                                        }}>
                                                            {data.addresses.map((address, id) => {
                                                                if(address.text && address.status !== 'invisible'){
                                                                    let prefix = (id + 1 !== data.addresses.length) &&
                                                                        (data.addresses.some((adr, adrInd) => adrInd > id && adr.status !== 'invisible' && adr.text)) ?
                                                                        <span>, </span> :
                                                                        null
                                                                    return <React.Fragment key={address.text + id}>{address.text}{prefix}</React.Fragment>
                                                                } else {
                                                                    return null
                                                                }
                                                            })}
                                                        </p>
                                                    </td>
                                                </tr>
                                            )}

                                    {((data.mobileNumber.text && data.mobileNumber.status !== 'invisible') || (data.officeNumber.text && data.officeNumber.status !== 'invisible')) && (
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
                                                                 alt="" src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png"
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
                                                <table cellPadding={0} cellSpacing={0}>
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <p style={{
                                                                margin: 0,
                                                                padding: 0,
                                                                textDecoration: 'none',
                                                                fontFamily: `${data.fontFamily}`,
                                                                fontSize: `${TransformFontSize(12, data.fontSize)}`,
                                                                paddingRight: `${TransformFontSize(5, data.fontSize)}`
                                                            }}>
                                                                {(data.officeNumber.text && data.officeNumber.status !== 'invisible') && (
                                                                    <React.Fragment>
                                                                        <a href={`tel:${data.officeNumber.text}`}
                                                                           color={data.colors.linkColor}
                                                                           style={{
                                                                            textDecoration: 'none',
                                                                            color: `${data.colors.linkColor}`,
                                                                            fontFamily: `${data.fontFamily}`,
                                                                            fontSize: `${TransformFontSize(12, data.fontSize)}`
                                                                        }}>
                                                                               <span>{data.officeNumber.text}</span>
                                                                        </a>
                                                                        {(data.mobileNumber.text && data.mobileNumber.status !== 'invisible' ) && (
                                                                            <span style={{
                                                                                color: `${data.colors.linkColor}`,
                                                                                fontSize: `${TransformFontSize(12, data.fontSize)}`,
                                                                                padding: '0',
                                                                                fontFamily: `${data.fontFamily}`,
                                                                                paddingLeft: `${TransformFontSize(5, data.fontSize)}`,
                                                                                paddingRight: `${TransformFontSize(5, data.fontSize)}`,
                                                                            }}> | </span>
                                                                        )}
                                                                    </React.Fragment>
                                                                )}
                                                                {(data.mobileNumber.text && data.mobileNumber.status !== 'invisible') && (
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
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    )}
                                    {/* email */}
                                    {(data.email.text && data.email.status !== 'invisible') && (
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
                                                                 alt="" src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png"
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
                                                <a href={`mailto:${data.email.text}`} color="#FA6400" style={{
                                                    textDecoration: 'none',
                                                    color: `${data.colors.linkColor}`,
                                                    fontSize: `${TransformFontSize(12, data.fontSize)}`
                                                }}>
                                                    <span style={{fontFamily: `${data.fontFamily}`}}>{data.email.text}</span>
                                                </a>
                                            </td>
                                        </tr>
                                    )}


                                    {(data.websiteUrl.text && data.websiteUrl.status !== 'invisible')&& (
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
                                                                 alt="" src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png"
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
                                                <a href={data.websiteUrl.text} color={data.colors.linkColor} style={{
                                                    textDecoration: 'none',
                                                    fontFamily: `${data.fontFamily}`,
                                                    color: `${data.colors.linkColor}`,
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
            </tbody>
        </table>
    )
}
