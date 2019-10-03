import React from 'react'

export default function Template5({data}) {
    return (
        <table id="template5" cellPadding={0} cellSpacing={0} style={{
            verticalAlign: '-webkit-baseline-middle',
            fontSize: 'small',
            fontFamily: 'Arial',
            width: '382px'
        }}>
            <tbody>
            <tr>
                <td>
                    <table cellPadding={0} cellSpacing={0} style={{
                        verticalAlign: '-webkit-baseline-middle',
                        fontSize: 'small',
                        fontFamily: 'Arial',
                        width: '100%'
                    }}>
                        <tbody>
                        <tr>
                            <td>
                                {(data.firstName || data.lastName) && (
                                    <h2 style={{
                                        margin: 0,
                                        paddingBottom: '5px',
                                        fontSize: '20px',
                                        color: `${data.colors.textColor}`
                                    }}>
                                        <span>{`${data.firstName} ${data.lastName}`}</span>
                                    </h2>
                                )}
                                {data.jobTitle && (
                                    <p style={{
                                        margin: 0,
                                        paddingBottom: '10px',
                                        fontSize: '14px',
                                        color: `${data.colors.textColor}`
                                    }}>
                                        <span>{data.jobTitle}</span>
                                    </p>
                                )}

                                {(data.companyName || data.department) && (
                                    <p style={{
                                        margin: 0,
                                        fontSize: '14px',
                                        color: `${data.colors.textColor}`,
                                        opacity: 0.5
                                    }}>
                                        {data.companyName && (
                                            <>
                                                <span>{data.companyName}</span>
                                                <span style={{padding: '0 8px'}}>|</span>
                                            </>
                                        )}
                                        <span>{data.department}</span>
                                    </p>
                                )}
                            </td>
                            {data.profilePhoto && (
                                <td style={{textAlign: 'right'}}>
                                  <span style={{display: 'inline-block', textAlign: 'right', width: '100%'}}>
                                    <img width={90} src={data.profilePhoto} role="presentation"
                                         style={{maxWidth: '130px', display: 'inline', textAlign: 'right'}}/>
                                  </span>
                                </td>
                            )}
                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td height={15}/>
            </tr>
            <tr>
                <td height={2} direction="horizontal" style={{
                    width: '100%',
                    borderBottom: `1px solid ${data.colors.themeColor}`,
                    borderLeft: 'none',
                    display: 'block'
                }}/>
            </tr>
            <tr>
                <td height={23}/>
            </tr>
            <tr>
                <td style={{verticalAlign: 'middle'}}>
                    <table cellPadding={0} cellSpacing={0}
                           style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'small', fontFamily: 'Arial'}}>
                        <tbody>
                        <tr>
                            <td>
                                <table cellPadding={0} cellSpacing={0} style={{
                                    verticalAlign: '-webkit-baseline-middle',
                                    fontSize: 'small',
                                    fontFamily: 'Arial'
                                }}>
                                    <tbody>

                                    {data.addresses.length > 0 && (
                                        <tr height={25} style={{verticalAlign: 'middle'}}>
                                            <td width={30} style={{verticalAlign: 'middle'}}>
                                                <table cellPadding={0} cellSpacing={0} style={{
                                                    verticalAlign: '-webkit-baseline-middle',
                                                    fontSize: 'small',
                                                    fontFamily: 'Arial'
                                                }}>
                                                    <tbody>
                                                    <tr>
                                                        <td style={{verticalAlign: 'bottom'}}>
                                                                  <span width={11} color="#d2245d" style={{
                                                                      display: 'block',
                                                                      backgroundColor: `${data.colors.themeColor}`
                                                                  }}>
                                                                    <img width={13}
                                                                         src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png"
                                                                         color={data.colors.themeColor} style={{
                                                                        display: 'block',
                                                                        backgroundColor: `${data.colors.themeColor}`
                                                                    }}/>
                                                                  </span>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td style={{padding: '0px'}}>
                                                <p color={data.colors.textColor} style={{
                                                    margin: 0,
                                                    fontSize: '12px',
                                                    color: `${data.colors.textColor}`
                                                }}>
                                                    {data.addresses && !!data.addresses.length && data.addresses.map((address, id) => {
                                                        const coma = id + 1 !== data.addresses.length ? ', ' : ''
                                                        return <><span>{address}</span>{coma}</>
                                                    })}
                                                </p>
                                            </td>
                                        </tr>
                                    )}

                                    {(data.officeNumber || data.mobileNumber) && (
                                        <tr height={25} style={{verticalAlign: 'middle'}}>
                                            <td width={30} style={{verticalAlign: 'middle'}}>
                                                <table cellPadding={0} cellSpacing={0} style={{
                                                    verticalAlign: '-webkit-baseline-middle',
                                                    fontSize: 'small',
                                                    fontFamily: 'Arial'
                                                }}>
                                                    <tbody>
                                                    <tr>
                                                        <td style={{verticalAlign: 'bottom'}}>
                                                           <span width={11} color="#d2245d" style={{
                                                               display: 'block',
                                                               backgroundColor: `${data.colors.themeColor}`
                                                           }}>
                                                           <img width={13}
                                                                src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png"
                                                                color={data.colors.themeColor} style={{
                                                               display: 'block',
                                                               backgroundColor: `${data.colors.themeColor}`
                                                           }}/></span>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td style={{padding: '0px', color: `${data.colors.linkColor}`}}>
                                                {data.officeNumber && (
                                                    <>
                                                        <a href={`tel:${data.officeNumber}`}
                                                           color={data.colors.linkColor} style={{
                                                            textDecoration: 'none',
                                                            color: `${data.colors.linkColor}`,
                                                            fontSize: '12px'
                                                        }}>
                                                            <span>{data.officeNumber}</span>
                                                        </a>
                                                        {data.mobileNumber && (
                                                            <span style={{padding: '0 8px'}}>|</span>
                                                        )}
                                                    </>
                                                )}
                                                <a href={`tel:${data.mobileNumber}`} color={data.colors.linkColor}
                                                   style={{
                                                       textDecoration: 'none',
                                                       color: `${data.colors.linkColor}`,
                                                       fontSize: '12px'
                                                   }}>
                                                    <span>{data.mobileNumber}</span>
                                                </a>
                                            </td>
                                        </tr>
                                    )}

                                    {data.email && (
                                        <tr height={25} style={{verticalAlign: 'middle'}}>
                                            <td width={30} style={{verticalAlign: 'middle'}}>
                                                <table cellPadding={0} cellSpacing={0} style={{
                                                    verticalAlign: '-webkit-baseline-middle',
                                                    fontSize: 'small',
                                                    fontFamily: 'Arial'
                                                }}>
                                                    <tbody>
                                                    <tr>
                                                        <td style={{verticalAlign: 'bottom'}}>
                                                                <span width={11} color={data.colors.themeColor} style={{
                                                                    display: 'block',
                                                                    backgroundColor: `${data.colors.themeColor}`
                                                                }}>
                                                                <img width={13}
                                                                     src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png"
                                                                     color={data.colors.themeColor} style={{
                                                                    display: 'block',
                                                                    backgroundColor: `${data.colors.themeColor}`
                                                                }}/></span>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td style={{padding: '0px'}}>
                                                <a href={`mailto:${data.email}`} color={data.colors.linkColor} style={{
                                                    textDecoration: 'none',
                                                    color: `${data.colors.linkColor}`,
                                                    fontSize: '12px'
                                                }}>
                                                    <span>{data.email}</span>
                                                </a>
                                            </td>
                                        </tr>
                                    )}

                                    {data.websiteUrl && (
                                        <tr height={25} style={{verticalAlign: 'middle'}}>
                                            <td width={30} style={{verticalAlign: 'middle'}}>
                                                <table cellPadding={0} cellSpacing={0} style={{
                                                    verticalAlign: '-webkit-baseline-middle',
                                                    fontSize: 'small',
                                                    fontFamily: 'Arial'
                                                }}>
                                                    <tbody>
                                                    <tr>
                                                        <td style={{verticalAlign: 'bottom'}}>
                                                            <span width={11} color={data.colors.themeColor} style={{
                                                                display: 'block',
                                                                backgroundColor: `${data.colors.themeColor}`
                                                            }}>
                                                                <img width={13}
                                                                     src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png"
                                                                     color={data.colors.themeColor} style={{
                                                                    display: 'block',
                                                                    backgroundColor: `${data.colors.themeColor}`
                                                                }}/>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td style={{padding: '0px'}}>
                                                <a href={data.websiteUrl} color={data.colors.linkColor} style={{
                                                    textDecoration: 'none',
                                                    color: `${data.colors.linkColor}`,
                                                    fontSize: '12px'
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
            <tr>
                <td height={16}/>
            </tr>
            <tr>
                <td>
                    <table cellPadding={0} cellSpacing={0} style={{
                        verticalAlign: '-webkit-baseline-middle',
                        fontSize: 'small',
                        fontFamily: 'Arial',
                        width: '100%'
                    }}>
                        <tbody>
                        <tr>
                            <td style={{verticalAlign: 'middle', textAlign: 'left'}}>
                                <table cellPadding={0} cellSpacing={0} style={{
                                    verticalAlign: '-webkit-baseline-middle',
                                    fontSize: 'small',
                                    fontFamily: 'Arial',
                                    display: 'inline-block'
                                }}>
                                    <tbody>
                                    <tr style={{textAlign: 'right'}}>
                                        {data.socialLinks.facebook && (
                                            <td>
                                                <>
                                                    <a href={data.socialLinks.facebook} color="#6A78D1" style={{
                                                        display: 'inline-block',
                                                        padding: '0px',
                                                        backgroundColor: `${data.colors.themeColor}`
                                                    }}>
                                                        <img height={24}
                                                             src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png"
                                                             alt="facebook" color={data.colors.themeColor} style={{
                                                            backgroundColor: `${data.colors.themeColor}`,
                                                            maxWidth: '135px',
                                                            display: 'block'
                                                        }}/>
                                                    </a>
                                                    <span style={{width: '8px', display: 'inline-block'}}></span>
                                                </>
                                            </td>
                                        )}


                                        {data.socialLinks.twitter && (
                                            <td>
                                                <>
                                                    <a href={data.socialLinks.twitter} color="#6A78D1" style={{
                                                        display: 'inline-block',
                                                        padding: '0px',
                                                        backgroundColor: `${data.colors.themeColor}`
                                                    }}>
                                                        <img height={24}
                                                             src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png"
                                                             alt="twitter" color={data.colors.themeColor} style={{
                                                            backgroundColor: `${data.colors.themeColor}`,
                                                            maxWidth: '135px',
                                                            display: 'block'
                                                        }}/>
                                                    </a>
                                                    <span style={{width: '8px', display: 'inline-block'}}></span>
                                                </>
                                            </td>
                                        )}

                                        {data.socialLinks.linkedin && (
                                            <td>
                                                <>
                                                    <a href={data.socialLinks.linkedin} color="#6A78D1" style={{
                                                        display: 'inline-block',
                                                        padding: '0px',
                                                        backgroundColor: `${data.colors.themeColor}`
                                                    }}>
                                                        <img height={24}
                                                             src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
                                                             alt="linkedin" color={data.colors.themeColor} style={{
                                                            backgroundColor: `${data.colors.themeColor}`,
                                                            maxWidth: '135px',
                                                            display: 'block'
                                                        }}/>
                                                    </a>
                                                    <span style={{width: '8px', display: 'inline-block'}}></span>
                                                </>
                                            </td>
                                        )}


                                        {data.socialLinks.instagram && (
                                            <td>
                                                <a href={data.socialLinks.instagram} color="#6A78D1" style={{
                                                    display: 'inline-block',
                                                    padding: '0px',
                                                    backgroundColor: `${data.colors.themeColor}`
                                                }}>
                                                    <img height={24}
                                                         src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png"
                                                         alt="instagram" color={data.colors.themeColor} style={{
                                                        backgroundColor: `${data.colors.themeColor}`,
                                                        maxWidth: '135px',
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
                                    <img width={90} src={data.companyLogo} role="presentation"
                                         style={{maxWidth: '90px', display: 'inline', textAlign: 'left'}}/>
                                </td>
                            )}
                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td height={30}/>
            </tr>
            </tbody>
        </table>
    )
}

