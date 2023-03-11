export const flag = {
    container: {
        visible: {
            opacity: 1,
            transition: {
                type: "tween",
                stiffness: 100,
                staggerChildren: 0.1,
                default: {
                    duration: 0.9,
                    cubicBezier: [0.3, 0, 0.7, 1]
                }
            }
        },
        hidden: {
            opacity: 0,
        }
    },
    child : {
        visible: {
            opacity: 1,
            y: 0, 
            x:0,
            transition: {
                default: {
                    duration: 0.9,
                    cubicBezier: [0.3, 0, 0.7, 1]
                }
            }
        },
        hidden: {
            opacity: 0, 
            y: 20,
            x: -5,
        }
    }
}
export const childFlag = {
    container: {
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.8,
                type: "tween",
                stiffness: 100,
                default: {
                    duration: 1,
                    cubicBezier: [0.3, 0, 0.7, 1]
                }
            }
        },
        hidden: {
            opacity: 0,
        }
    },
    child : {
        visible: {
            opacity: 1,
            y: 0, 
            x:0,
            transition: {
                default: {
                    duration: 0.6,
                    cubicBezier: [0.3, 0, 0.7, 1]
                }
            }
        },
        hidden: {
            opacity: 0, 
            y: 20
        }
    }
}

export const bio = {
    container: {
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 1,
                type: "tween",
                stiffness: 100,
                staggerChildren: 0.3,
                default: {
                    duration: 1,
                    cubicBezier: [0.3, 0, 0.7, 1]
                }
            }
        },
        hidden: {
            opacity: 0,
        }
    },
    child : {
        visible: {
            opacity: 1,
            y: 0, 
            x:0,
            transition: {
                default: {
                    duration: 0.6,
                    ease: [0.3, 0, 0.7, 1]
                }
            }
        },
        hidden: {
            opacity: 0, 
            y: 20,
        }
    }
}

export const social = {
    container: {
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 1.8,
                type: "tween",
                stiffness: 100,
                staggerChildren: 0.3,
                default: {
                    duration: 1,
                    else: [0.3, 0, 0.7, 1]
                }
            }
        },
        hidden: {
            opacity: 0,
        }
    },
    child : {
        visible: {
            opacity: 1,
            y: 0, 
            x:0,
            transition: {
                default: {
                    duration: 0.6,
                    cubicBezier: [0.3, 0, 0.7, 1]
                }
            }
        },
        hidden: {
            opacity: 0, 
            y: 20,
        }
    }
}