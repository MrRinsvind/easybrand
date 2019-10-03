import React from 'react'

export default function Template1({data}) {
    return (
        <table id="template1" cellPadding={0} cellSpacing={0}
               style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
            <tbody>
            <tr>
                <td>
                    <table cellPadding={0} cellSpacing={0}
                           style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
                        <tbody>
                        <tr>
                            {data.profilePhoto || data.companyLogo || data.socialLinks.facebook || data.socialLinks.twitter || data.socialLinks.instagram || data.socialLinks.linkedin ? (
                                <>
                                    <td style={{verticalAlign: 'top'}}>
                                        <table cellPadding={0} cellSpacing={0} style={{
                                            verticalAlign: '-webkit-baseline-middle',
                                            fontSize: 'medium',
                                            fontFamily: 'Arial',
                                            width: '180px'
                                        }}>
                                            <tbody>
                                            {data.profilePhoto && (
                                                <>
                                                    <tr>
                                                        <td style={{textAlign: 'center'}}>
                                                            <p style={{textAlign: 'center', margin: 0}}>
                                                                <img width={90} src={data.profilePhoto}
                                                                     style={{maxWidth: '90px'}}/>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td height={15}/>
                                                    </tr>
                                                </>
                                            )}

                                            {data.companyLogo && (
                                                <>
                                                    <tr>
                                                        <td style={{textAlign: 'center'}}>
                                                            <p style={{textAlign: 'center', margin: 0}}>
                                                                <img width={90} src={data.companyLogo}
                                                                     style={{maxWidth: '90px'}}/>
                                                            </p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td height={15}/>
                                                    </tr>
                                                </>
                                            )}

                                            <tr>
                                                <td style={{textAlign: 'center'}}>
                                                    <table cellPadding={0} cellSpacing={0} style={{
                                                        verticalAlign: '-webkit-baseline-middle',
                                                        fontSize: 'medium',
                                                        fontFamily: 'Arial',
                                                        display: 'inline-block'
                                                    }}>
                                                        <tbody>
                                                        <tr style={{textAlign: 'center'}}>
                                                            <td>
                                                                {data.socialLinks.facebook && (
                                                                    <>
                                                                        <a href={data.socialLinks.facebook}
                                                                           color={data.colors.themeColor} style={{
                                                                            display: 'inline-block',
                                                                            padding: '0px',
                                                                            backgroundColor: `${data.colors.themeColor}`
                                                                        }}>
                                                                            <img height={24}
                                                                                 src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png"
                                                                                 alt="facebook" color="#6A78D1" style={{
                                                                                backgroundColor: `${data.colors.themeColor}`,
                                                                                maxWidth: '135px',
                                                                                display: 'block'
                                                                            }}/>
                                                                        </a>
                                                                        <span style={{
                                                                            width: '8px',
                                                                            display: 'inline-block'
                                                                        }}></span>
                                                                    </>
                                                                )}
                                                            </td>
                                                            <td>
                                                                {data.socialLinks.twitter && (
                                                                    <>
                                                                        <a href={data.socialLinks.twitter}
                                                                           color={data.colors.themeColor} style={{
                                                                            display: 'inline-block',
                                                                            padding: '0px',
                                                                            backgroundColor: `${data.colors.themeColor}`
                                                                        }}>
                                                                            <img height={24}
                                                                                 src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png"
                                                                                 alt="twitter"
                                                                                 color={data.colors.themeColor} style={{
                                                                                backgroundColor: `${data.colors.themeColor}`,
                                                                                maxWidth: '135px',
                                                                                display: 'block'
                                                                            }}/>
                                                                        </a>
                                                                        <span style={{
                                                                            width: '8px',
                                                                            display: 'inline-block'
                                                                        }}></span>
                                                                    </>
                                                                )}
                                                            </td>
                                                            <td>
                                                                {data.socialLinks.linkedin && (
                                                                    <>
                                                                        <a href={data.socialLinks.linkedin}
                                                                           color={data.colors.themeColor} style={{
                                                                            display: 'inline-block',
                                                                            padding: '0px',
                                                                            backgroundColor: `${data.colors.themeColor}`
                                                                        }}>
                                                                            <img height={24}
                                                                                 src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
                                                                                 alt="linkedin"
                                                                                 color={data.colors.themeColor} style={{
                                                                                backgroundColor: `${data.colors.themeColor}`,
                                                                                maxWidth: '135px',
                                                                                display: 'block'
                                                                            }}/>
                                                                        </a>
                                                                        <span style={{
                                                                            width: '8px',
                                                                            display: 'inline-block'
                                                                        }}></span>
                                                                    </>
                                                                )}
                                                            </td>
                                                            <td>
                                                                {data.socialLinks.instagram && (
                                                                    <a href={data.socialLinks.instagram}
                                                                       color={data.colors.themeColor} style={{
                                                                        display: 'inline-block',
                                                                        padding: '0px',
                                                                        backgroundColor: `${data.colors.themeColor}`
                                                                    }}>
                                                                        <img height={24}
                                                                             src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png"
                                                                             alt="instagram"
                                                                             color={data.colors.themeColor} style={{
                                                                            backgroundColor: `${data.colors.themeColor}`,
                                                                            maxWidth: '135px',
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
                                    <td width={5} style={{borderRight: `solid 1px ${data.colors.themeColor}`}}>
                                    </td>
                                    <td width={25}>
                                    </td>
                                </>
                            ) : ""}
                            {/* third column */}
                            <td style={{padding: '0px', verticalAlign: 'top'}}>
                                <table cellPadding={0} cellSpacing={0}>
                                    <tbody>
                                    <tr>
                                        {data.firstName || data.lastName ? (
                                            <td>
                                                <p color={data.colors.textColor} style={{
                                                    margin: '0px',
                                                    fontSize: '20px',
                                                    fontWeight: "bold",
                                                    color: `${data.colors.textColor}`
                                                }}>
                                                    {`${data.firstName} ${data.lastName}`}
                                                </p>
                                            </td>
                                        ) : ""}

                                        {
                                            (data.firstName || data.lastName) && data.jobTitle && (
                                                <td>
                                                    <span style={{
                                                        fontSize: '16px',
                                                        fontWeight: 'lighter',
                                                        color: `${data.colors.textColor}`,
                                                        padding: '10px'
                                                    }}> | </span>
                                                </td>
                                            )
                                        }

                                        {data.jobTitle && (
                                            <td>
                                                <p color={data.colors.textColor} style={{
                                                    margin: '0px',
                                                    fontSize: '16px',
                                                    lineHeight: '24px',
                                                    color: `${data.colors.textColor}`
                                                }}>
                                                    <span>{data.jobTitle}</span>
                                                </p>
                                            </td>
                                        )}
                                    </tr>
                                    <tr>
                                        <td>
                                            <div style={{height: '8px'}}></div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <table cellPadding={0} cellSpacing={0}>
                                    <tbody>
                                    <tr>
                                        {data.companyName && (
                                            <td>
                                                <p color={data.colors.textColor} style={{
                                                    margin: '0px',
                                                    fontSize: '14px',
                                                    color: `${data.colors.textColor}`,
                                                    paddingRight: '4px',
                                                    opacity: '0.5'
                                                }}>
                                                    <span>{data.companyName}</span>
                                                </p>
                                            </td>
                                        )}

                                        {data.companyName && data.department && (
                                            <td>
                                                <span style={{
                                                    padding: '0 8px',
                                                    fontWeight: '100',
                                                    fontSize: '14px',
                                                    color: `${data.colors.textColor}`,
                                                    opacity: '0.5'
                                                }}>|</span>
                                            </td>
                                        )}

                                        {data.department && (
                                            <td>
                                                <p color={data.colors.textColor} style={{
                                                    margin: '0px',
                                                    fontSize: '14px',
                                                    color: `${data.colors.textColor}`,
                                                    paddingLeft: '4px',
                                                    opacity: '0.5'
                                                }}>
                                                    <span>{data.department}</span>
                                                </p>
                                            </td>
                                        )}
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
                                        <td height={8}/>
                                    </tr>
                                    {/* address */}
                                    {data.addresses.length > 0 && (
                                        <tr height={25} style={{verticalAlign: 'middle'}}>
                                            <td width={30} style={{verticalAlign: 'middle'}}>
                                                <table cellPadding={0} cellSpacing={0} style={{
                                                    verticalAlign: '-webkit-baseline-middle',
                                                    fontSize: 'medium',
                                                    fontFamily: 'Arial'
                                                }}>
                                                    <tbody>
                                                    <tr>
                                                        <td style={{verticalAlign: 'bottom'}}>
                                                                      <span width={11} color={data.colors.themeColor}
                                                                            style={{
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
                                                    textDecoration: 'none',
                                                    color: `${data.colors.textColor}`,
                                                    fontSize: '12px'
                                                }}>
                                                    {data.addresses && !!data.addresses.length && data.addresses.map((address, id) => {
                                                        const prefix = id + 1 !== data.addresses.length ? ', ' : ''
                                                        return <><span>{address}</span>{prefix}</>
                                                    })}
                                                </p>
                                            </td>
                                        </tr>
                                    )}
                                    {(data.mobileNumber || data.officeNumber) && (
                                        <tr height={25} style={{verticalAlign: 'middle'}}>
                                            <td width={30} style={{verticalAlign: 'middle'}}>
                                                <table cellPadding={0} cellSpacing={0} style={{
                                                    verticalAlign: '-webkit-baseline-middle',
                                                    fontSize: 'medium',
                                                    fontFamily: 'Arial'
                                                }}>
                                                    <tbody>
                                                    <tr>
                                                        <td style={{verticalAlign: 'bottom'}}>
                                                                  <span width={11} color={data.colors.themeColor}
                                                                        style={{
                                                                            display: 'block',
                                                                            backgroundColor: `${data.colors.themeColor}`
                                                                        }}>
                                                                    <img width={13}
                                                                         src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png"
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
                                                <table cellPadding={0} cellSpacing={0}>
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <p style={{
                                                                margin: 0,
                                                                padding: 0,
                                                                textDecoration: 'none',
                                                                fontSize: '12px',
                                                                paddingRight: '5px'
                                                            }}>

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
                                                                            <span style={{
                                                                                color: `${data.colors.linkColor}`,
                                                                                fontSize: '12px',
                                                                                padding: '0 5px'
                                                                            }}> | </span>
                                                                        )}
                                                                    </>
                                                                )}
                                                                {data.mobileNumber && (
                                                                    <a href={`tel:${data.mobileNumber}`}
                                                                       color={data.colors.linkColor} style={{
                                                                        textDecoration: 'none',
                                                                        color: `${data.colors.linkColor}`,
                                                                        fontSize: '12px'
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
                                        <tr height={25} style={{verticalAlign: 'middle'}}>
                                            <td width={30} style={{verticalAlign: 'middle'}}>
                                                <table cellPadding={0} cellSpacing={0} style={{
                                                    verticalAlign: '-webkit-baseline-middle',
                                                    fontSize: 'medium',
                                                    fontFamily: 'Arial'
                                                }}>
                                                    <tbody>
                                                    <tr>
                                                        <td style={{verticalAlign: 'bottom'}}>
                                                                      <span width={11} color={data.colors.themeColor}
                                                                            style={{
                                                                                display: 'block',
                                                                                backgroundColor: `${data.colors.themeColor}`
                                                                            }}>
                                                                        <img width={13}
                                                                             src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png"
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
                                                <a href={`mailto:${data.email}`} color="#FA6400" style={{
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
                                                    fontSize: 'medium',
                                                    fontFamily: 'Arial'
                                                }}>
                                                    <tbody>
                                                    <tr>
                                                        <td style={{verticalAlign: 'bottom'}}>
                                                                          <span width={11}
                                                                                color={data.colors.themeColor} style={{
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
            </tbody>
        </table>
    )
}

