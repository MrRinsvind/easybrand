import React from 'react'

import { TransformFontSize } from 'common/utils/helpers'

export default function Template3({data}) {
    return (
        <table id="template3" cellPadding={0} cellSpacing={0} style={{
            verticalAlign: '-webkit-baseline-middle',
            fontFamily: `${data.fontFamily}`,
            width: `${TransformFontSize(420, data.fontSize)}`
        }}>
            <tbody>
            <tr>
                <td>
                    {data.profilePhoto && data.profilePicture && (
                        <table cellPadding={0} cellSpacing={0} style={{
                            verticalAlign: '-webkit-baseline-middle',
                            fontFamily: `${data.fontFamily}`,
                            width: `${TransformFontSize(420, data.fontSize)}`
                        }}>
                            <tbody>
                            <tr>
                                <td>
                                    <p style={{textAlign: 'center', margin: 0}}>
                                        <img alt="" width={`${TransformFontSize(90, data.fontSize)}`} src={data.profilePhoto}/>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td style={{height: `${TransformFontSize(10, data.fontSize)}`}}/>
                            </tr>
                            </tbody>
                        </table>
                    )}

                    {((data.firstName.text && data.firstName.status !== 'invisible' ) || (data.lastName.text && data.lastName.status !== 'invisible')) && (
                        <table cellPadding={0} cellSpacing={0} style={{
                            verticalAlign: '-webkit-baseline-middle',
                            fontFamily: `${data.fontFamily}`,
                            width: `${TransformFontSize(420, data.fontSize)}`
                        }}>
                            <tbody>
                            <tr>
                                <td>
                                    <h2 style={{
                                        fontFamily: `${data.fontFamily}`,
                                        fontSize: `${TransformFontSize(20, data.fontSize)}`,
                                        color: `${data.colors.textColor}`,
                                        letterSpacing: 0,
                                        margin: 0,
                                        textAlign: 'center'
                                    }}>
                                        <span>
                                            { data.firstName.status !== 'invisible' && (`${data.firstName.text} `) }
                                            { data.lastName.status !== 'invisible' && (`${data.lastName.text}`) }
                                        </span>
                                    </h2>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    )}

                    {(data.jobTitle.text && data.jobTitle.status !== 'invisible') && (
                        <table cellPadding={0} cellSpacing={0} style={{
                            verticalAlign: '-webkit-baseline-middle',
                            fontFamily: `${data.fontFamily}`,
                            width: `${TransformFontSize(420, data.fontSize)}`
                        }}>
                            <tbody>
                            <tr>
                                <td>
                                    <p style={{
                                        fontFamily: `${data.fontFamily}`,
                                        fontSize: `${TransformFontSize(14, data.fontSize)}`,
                                        color: `${data.colors.textColor}`,
                                        letterSpacing: 0,
                                        margin: 0,
                                        textAlign: 'center',
                                        lineHeight: `${TransformFontSize(24, data.fontSize)}`
                                    }}>
                                        {data.jobTitle.text}
                                    </p>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    )}

                    {((data.companyName.text && data.companyName.status !== 'invisible') || (data.department.text && data.department.status)) && (
                        <table cellPadding={0} cellSpacing={0} style={{
                            verticalAlign: '-webkit-baseline-middle',
                            fontFamily: `${data.fontFamily}`,
                            width: `${TransformFontSize(420, data.fontSize)}`,
                            borderBottom: `solid 1px ${data.colors.themeColor}`
                        }}>
                            <tbody>
                            <tr>
                                <td>
                                    <p style={{
                                        fontFamily: `${data.fontFamily}`,
                                        fontSize: `${TransformFontSize(14, data.fontSize)}`,
                                        color: `${data.colors.textColor}`,
                                        margin: 0,
                                        letterSpacing: 0,
                                        textAlign: 'center',
                                        lineHeight: `${TransformFontSize(24, data.fontSize)}`,
                                        opacity: 0.5
                                    }}>
                                        {(data.companyName.text && data.companyName.status !== 'invisible') && (
                                            <>
                                                <span>{data.companyName.text}</span>
                                                {(data.department.text && data.department.status !== 'invisible')&& (
                                                    <span style={{
                                                        padding: "0",
                                                        paddingLeft: `${TransformFontSize(8, data.fontSize)}`,
                                                        paddingRight: `${TransformFontSize(8, data.fontSize)}`,
                                                        color: `${data.colors.textColor}`
                                                    }}>|</span>
                                                )}
                                            </>
                                        )}
                                        {(data.department.text && data.department.status !== 'invisible') && (
                                            <span style={{color: `${data.colors.textColor}`}}>{data.department.text}</span>
                                        )}
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td style={{height: `${TransformFontSize(10, data.fontSize)}`}}/>
                            </tr>
                            </tbody>
                        </table>
                    )}
                    <table cellPadding={0} cellSpacing={0} style={{
                        verticalAlign: '-webkit-baseline-middle',
                        fontFamily: `${data.fontFamily}`,
                        width: `${TransformFontSize(420, data.fontSize)}`
                    }}>
                        <tbody>
                        <tr>
                            <td style={{height: `${TransformFontSize(10, data.fontSize)}`}}/>
                        </tr>

                        { data.addresses.filter((address) => { return address.text && address.status !== 'invisible'}).length > 0 && (
                            <>
                                <tr>
                                    <td style={{marginBottom: `${TransformFontSize(10, data.fontSize)}`}}>
                                        <p style={{
                                            textAlign: 'center',
                                            margin: 0,
                                            fontSize: `${TransformFontSize(12, data.fontSize)}`,
                                            color: `${data.colors.textColor}`
                                        }}>
                                            <img alt="" width={`${TransformFontSize(13, data.fontSize)}`}
                                                 src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png"
                                                 color="rgb(252,165,75)" style={{
                                                backgroundColor: `${data.colors.themeColor}`,
                                                marginRight: `${TransformFontSize(10, data.fontSize)}`
                                            }}/>

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
                                </tr>

                                <tr>
                                    <td style={{height: `${TransformFontSize(10, data.fontSize)}`}}/>
                                </tr>
                            </>
                        )}

                        {( (data.officeNumber.text && data.officeNumber.status !== 'invisible') || (data.mobileNumber.text && data.mobileNumber.status !== 'invisible')) && (
                            <>
                                <tr>
                                    <td style={{marginBottom: `${TransformFontSize(10, data.fontSize)}`}}>
                                        <p style={{
                                            textAlign: 'center',
                                            margin: 0,
                                            fontSize: `${TransformFontSize(12, data.fontSize)}`,
                                            color: data.colors.linkColor,
                                            fontFamily: `${data.fontFamily}`
                                        }}>
                                            <img alt="" width={`${TransformFontSize(13, data.fontSize)}`}
                                                 src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png"
                                                 color={data.colors.themeColor} style={{
                                                backgroundColor: `${data.colors.themeColor}`,
                                                marginRight: `${TransformFontSize(10, data.fontSize)}`
                                            }}/>
                                            {(data.officeNumber.text && data.officeNumber.status !== 'invisible') && (
                                                <>
                                                    <a href={`tel:${data.officeNumber.text}`} color={data.colors.linkColor}
                                                       style={{
                                                           textDecoration: 'none',
                                                           color: `${data.colors.linkColor}`,
                                                           fontSize: `${TransformFontSize(12, data.fontSize)}`,
                                                           fontFamily: `${data.fontFamily}`,
                                                       }}>
                                                        <span>{data.officeNumber.text}</span>
                                                    </a>
                                                    {(data.mobileNumber.text && data.mobileNumber.status !== 'invisible') && (
                                                        <span style={{
                                                            color: `${data.colors.linkColor}`,
                                                            fontSize: `${TransformFontSize(12, data.fontSize)}`,
                                                            padding: '0',
                                                            fontFamily: `${data.fontFamily}`,
                                                            paddingRight: `${TransformFontSize(5, data.fontSize)}`,
                                                            paddingLeft: `${TransformFontSize(5, data.fontSize)}`,
                                                        }}> | </span>
                                                    )}
                                                </>
                                            )}
                                            {(data.mobileNumber.text && data.mobileNumber.status !== 'invisible' )&& (
                                                <a href={`tel:${data.mobileNumber.text}`} color={data.colors.linkColor}
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
                                <tr>
                                    <td style={{height: `${TransformFontSize(10, data.fontSize)}`,}}/>
                                </tr>
                            </>
                        )}


                        {( data.email.text && data.email.status !== 'invisible' ) && (
                            <>
                                <tr>
                                    <td style={{marginBottom: `${TransformFontSize(10, data.fontSize)}`,}}>
                                        <p style={{
                                            textAlign: 'center',
                                            margin: 0,
                                            fontFamily: `${data.fontFamily}`,
                                            fontSize: `${TransformFontSize(12, data.fontSize)}`,
                                            color: `${data.colors.linkColor}`
                                        }}>
                                            <img alt="" width={`${TransformFontSize(13, data.fontSize)}`}
                                                 src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png"
                                                 color={data.colors.themeColor} style={{
                                                backgroundColor: `${data.colors.themeColor}`,
                                                marginRight: `${TransformFontSize(10, data.fontSize)}`,
                                            }}/>
                                            <a href={data.email.text} color={data.colors.linkColor} style={{
                                                textDecoration: 'none',
                                                color: `${data.colors.linkColor}`,
                                                fontFamily: `${data.fontFamily}`,
                                                fontSize: `${TransformFontSize(12, data.fontSize)}`,
                                            }}>
                                                <span style={{fontFamily: `${data.fontFamily}`}}>{data.email.text}</span>
                                            </a>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{height: `${TransformFontSize(10, data.fontSize)}`,}}/>
                                </tr>
                            </>
                        )}

                        { data.websiteUrl.text && data.websiteUrl.status !== 'invisible' && (
                            <>
                                <tr>
                                    <td style={{marginBottom: `${TransformFontSize(10, data.fontSize)}`,}}>
                                        <p style={{textAlign: 'center', margin: 0, fontSize: `${TransformFontSize(12, data.fontSize)}`, color: '#262626'}}>
                                            <img alt="" width={`${TransformFontSize(13, data.fontSize)}`}
                                                 src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png"
                                                 color={data.colors.themeColor} style={{
                                                backgroundColor: `${data.colors.themeColor}`,
                                                marginRight: `${TransformFontSize(10, data.fontSize)}`
                                            }}/>
                                            <a href={data.websiteUrl.text} color={data.colors.linkColor} style={{
                                                textDecoration: 'none',
                                                color: `${data.colors.linkColor}`,
                                                fontFamily: `${data.fontFamily}`,
                                                fontSize: `${TransformFontSize(12, data.fontSize)}`
                                            }}>
                                                <span style={{fontFamily: `${data.fontFamily}`}}>{data.websiteUrl.text}</span>
                                            </a>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{height: `${TransformFontSize(10, data.fontSize)}`}}/>
                                </tr>
                            </>
                        )}

                        {( (data.socialLinks.facebook.text && data.socialLinks.facebook.status !== 'invisible') || (data.socialLinks.twitter.text && data.socialLinks.twitter.status !== 'invisible') || (data.socialLinks.instagram.text && data.socialLinks.instagram.status !== 'invisible') || (data.socialLinks.linkedin.text && data.socialLinks.linkedin.status !== 'invisible')) && (
                            <>
                                <tr>
                                    <td>
                                        <p style={{textAlign: 'center', margin: 0}}>
                                            {(data.socialLinks.facebook.text && data.socialLinks.facebook.status !== 'invisible') && (
                                                <a style={{textDecoration: 'none', fontSize: 0, marginRight: `${TransformFontSize(8, data.fontSize)}`}}
                                                   href={data.socialLinks.facebook.text}>
                                                    <img height={`${TransformFontSize(24, data.fontSize)}`}
                                                         src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png"
                                                         alt="facebook" color="#5470BA"
                                                         style={{backgroundColor: `${data.colors.themeColor}`}}/>
                                                </a>
                                            )}

                                            {(data.socialLinks.twitter.text && data.socialLinks.twitter.status !== 'invisible') && (
                                                <a style={{textDecoration: 'none', fontSize: 0, marginRight: `${TransformFontSize(8, data.fontSize)}`}}
                                                   href={data.socialLinks.twitter.text}>
                                                    <img height={`${TransformFontSize(24, data.fontSize)}`}
                                                         src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png"
                                                         alt="twitter" color="#5470BA"
                                                         style={{backgroundColor: `${data.colors.themeColor}`}}/>
                                                </a>
                                            )}

                                            {(data.socialLinks.linkedin.text && data.socialLinks.linkedin.status !== 'invisible') && (
                                                <a style={{textDecoration: 'none', fontSize: 0, marginRight: '8px'}}
                                                   href={data.socialLinks.linkedin.text}>
                                                    <img height={`${TransformFontSize(24, data.fontSize)}`}
                                                         src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
                                                         alt="linkedin" color="#5470BA"
                                                         style={{backgroundColor: `${data.colors.themeColor}`}}/>
                                                </a>
                                            )}

                                            {(data.socialLinks.instagram.text && data.socialLinks.instagram.status !== 'invisible') && (
                                                <a style={{textDecoration: 'none', fontSize: 0}}
                                                   href={data.socialLinks.instagram.text}>
                                                    <img height={`${TransformFontSize(24, data.fontSize)}`}
                                                         src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png"
                                                         alt="instagram" color="#5470BA"
                                                         style={{backgroundColor: `${data.colors.themeColor}`}}/>
                                                </a>
                                            )}

                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{height: `${TransformFontSize(10, data.fontSize)}`}}/>
                                </tr>
                            </>
                        )}

                        {data.companyLogo && data.imageCompany && (
                            <tr>
                                <td>
                                    <p style={{margin: 0, textAlign: 'center'}}>
                                        <img alt="" width={`${TransformFontSize(90, data.fontSize)}`} src={data.companyLogo}/>
                                    </p>
                                </td>
                            </tr>
                        )}

                        </tbody>
                    </table>
                </td>
            </tr>
            </tbody>
        </table>
    )
}
