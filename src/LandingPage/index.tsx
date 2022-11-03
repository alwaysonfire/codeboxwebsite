import {
  Button,
  Box,
  Grid,
  Typography,
  Card,
  CardHeader,
  TextField,
  TextareaAutosize,
  Divider,
  IconButton,
  Link,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MailIcon from '@mui/icons-material/Mail';
import LocalphoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {
  RiAdvertisementFill,
  RiEmpathizeLine,
  RiLinkedinFill,
  RiFacebookFill,
} from 'react-icons/ri';

import { IoIosMail } from 'react-icons/io';
import Background from '../background/background.png';
import logo from '../background/Codebox_logo-Horizontal.png';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useRef, useState } from 'react';
import emailJs from '@emailjs/browser';
import useMatchMedia from 'use-match-media-hook';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queries = [
  '(max-width: 480px)',
  '(min-width: 481px)',
  '(min-width: 622px)',
  '(min-width: 965px)',
];

const Base = styled('div')({
  color: 'white',
  backgroundImage: `url(${Background})`,
  minHeight: '100vh',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  fontFamily: 'Poppins',
});

function LandingPage() {
  const [submitting, setSubmitting] = useState(false);
  const [small, medium, large, xtralarge] = useMatchMedia(queries);
  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Must be a valid email')
      .required('Email is required'),
    firstname: yup.string().required('First name is required'),
    lastname: yup.string().required('Last name is required'),
    message: yup.string().required('Message is required'),
  });

  const form = useRef(null);

  const formik = useFormik({
    initialValues: {
      email: '',
      firstname: '',
      lastname: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setSubmitting(true);
      try {
        await emailJs.sendForm(
          'service_99ajtpd',
          'template_qrmfqsf',
          form.current!,
          'qkpjlT4z_WhBcXdmO'
        );
        toast.success('😎 Message sent! Stay awesome', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        resetForm();
        setSubmitting(false);
      } catch (error) {
        toast.error('😭 Uhh, something went wrong please try again', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      {xtralarge ? (
        <>
          <Base>
            <Box
              component={'img'}
              sx={{
                height: 50,
                width: 200,
                ml: 2,
                mt: 2,
              }}
              src={logo}
              alt="codeboxlogo"
            ></Box>
            <Grid container direction={'row'}>
              <Grid
                xs={5}
                md={5}
                lg={5}
                item
                container
                direction={'column'}
                sx={{ ml: 10, mt: 15 }}
              >
                <Grid container spacing={3} item>
                  <Grid item>
                    {' '}
                    <Typography
                      sx={{
                        fontSize: '100px',
                        maxWidth: '400px',
                        lineHeight: 0.9,
                      }}
                    >
                      Get in touch!
                    </Typography>
                  </Grid>
                  <Grid
                    fontSize={'50px'}
                    sx={{ mt: 5 }}
                    container
                    item
                    direction={'row'}
                  >
                    <IoIosMail fontSize="inherit" color="#ef2ef9" />
                    <Typography fontSize="24px" sx={{ pl: 2, pt: 1 }}>
                      info@thecodebox.net
                    </Typography>
                  </Grid>
                  <Grid fontSize={'50px'} container item direction={'row'}>
                    <LocalphoneIcon
                      sx={{ color: '#ef2ef9' }}
                      fontSize="inherit"
                    />
                    <Typography fontSize="24px" sx={{ pl: 2, pt: 1 }}>
                      09260090824
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  direction={'row'}
                  spacing={4}
                  sx={{ mt: 15 }}
                  fontSize={'50px'}
                >
                  <Grid item>
                    <a href="https://www.facebook.com/profile.php?id=100087063916333">
                      <RiFacebookFill fontSize="inherit" />
                    </a>
                  </Grid>
                  <Grid item>
                    {' '}
                    <a href="https://www.linkedin.com/company/the-codebox">
                      <RiLinkedinFill fontSize={'50px'} />
                    </a>
                  </Grid>
                  <Grid item>
                    <a href="https://api.whatsapp.com/send?phone=%2B639952888978&fbclid=IwAR2dJQY_06vI4sYeeHMFcE0qg7u8JHMp-2uiSgZEiHBkMKStoGabBiKnmOE">
                      <WhatsAppIcon fontSize="inherit" />
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={5} md={5} lg={5} sx={{ mt: 15 }}>
                <Card
                  sx={{
                    borderRadius: 5,
                    backgroundColor: 'rgba(255,255,255, .2)',
                    color: '#fff',
                    fontSize: '15px',
                  }}
                >
                  <CardHeader
                    sx={{ backgroundColor: '#df00cd', color: 'white' }}
                    title="Contact us"
                    titleTypographyProps={{ variant: 'h4', sx: { ml: 2 } }}
                  ></CardHeader>

                  <form
                    ref={form}
                    onSubmit={formik.handleSubmit}
                    style={{
                      paddingBottom: 40,
                      paddingTop: 40,
                      paddingLeft: 50,
                      paddingRight: 50,
                    }}
                  >
                    <Box mb={3} display={'flex'}>
                      <div style={{ marginRight: '40px' }}>
                        <div style={{ marginBottom: '10px' }}>First name</div>
                        <TextField
                          id="firstname"
                          name="firstname"
                          value={formik.values.firstname}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.firstname &&
                            Boolean(formik.errors.firstname)
                          }
                          helperText={
                            formik.touched.firstname && formik.errors.firstname
                          }
                          InputProps={{
                            sx: { borderRadius: 5, backgroundColor: 'white' },
                          }}
                        />
                      </div>
                      <div>
                        <div style={{ marginBottom: '10px' }}>Last name</div>
                        <TextField
                          id="lastname"
                          name="lastname"
                          value={formik.values.lastname}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.lastname &&
                            Boolean(formik.errors.lastname)
                          }
                          helperText={
                            formik.touched.lastname && formik.errors.lastname
                          }
                          InputProps={{
                            sx: { borderRadius: 5, backgroundColor: 'white' },
                          }}
                        />
                      </div>
                    </Box>
                    <div style={{ marginBottom: 20 }}>
                      <div style={{ marginBottom: '10px' }}>Email Address</div>
                      <div>
                        <TextField
                          fullWidth
                          id="email"
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.email && Boolean(formik.errors.email)
                          }
                          helperText={
                            formik.touched.email && formik.errors.email
                          }
                          InputProps={{
                            sx: { borderRadius: 5, backgroundColor: 'white' },
                          }}
                        />
                      </div>
                    </div>
                    <div style={{ marginBottom: 20 }}>
                      <div style={{ marginBottom: '10px' }}>Message</div>
                      <div>
                        <TextField
                          id="message"
                          name="message"
                          value={formik.values.message}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.message &&
                            Boolean(formik.errors.message)
                          }
                          helperText={
                            formik.touched.message && formik.errors.message
                          }
                          InputProps={{
                            sx: {
                              alignItems: 'start',
                              borderRadius: 5,
                              height: 100,
                              backgroundColor: 'white',
                            },
                          }}
                          fullWidth
                        />
                      </div>
                    </div>
                    <Box textAlign={'center'}>
                      <Button
                        sx={{
                          backgroundColor: '#df00cd',
                          borderRadius: 5,
                          px: 4,
                        }}
                        variant="contained"
                        type="submit"
                        disabled={submitting}
                      >
                        Send
                      </Button>
                    </Box>
                  </form>
                </Card>
              </Grid>
            </Grid>
          </Base>
        </>
      ) : (
        <>
          {large ? (
            <>
              {' '}
              <Base>
                <Box
                  component={'img'}
                  sx={{
                    height: 50,
                    width: 200,
                    ml: 2,
                    mt: 2,
                  }}
                  src={logo}
                  alt="codeboxlogo"
                ></Box>
                <Grid container direction={'row'}>
                  <Grid
                    xs={12}
                    md={12}
                    lg={12}
                    item
                    container
                    direction={'column'}
                    sx={{ ml: 10, mt: 10 }}
                  >
                    <Grid container item>
                      <Grid item>
                        {' '}
                        <Typography
                          sx={{
                            fontSize: '70px',
                            maxWidth: '300px',
                            lineHeight: 0.9,
                          }}
                        >
                          Get in touch!
                        </Typography>
                      </Grid>
                      <Grid
                        fontSize={'35px'}
                        sx={{ mt: 5 }}
                        container
                        item
                        direction={'row'}
                      >
                        <IoIosMail fontSize="inherit" color="#ef2ef9" />
                        <Typography fontSize="18px" sx={{ pl: 2, pt: 1 }}>
                          info@thecodebox.net
                        </Typography>
                      </Grid>
                      <Grid fontSize={'35px'} container item direction={'row'}>
                        <LocalphoneIcon
                          sx={{ color: '#ef2ef9' }}
                          fontSize="inherit"
                        />
                        <Typography fontSize="18px" sx={{ pl: 2, pt: 1 }}>
                          09260090824
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={12} lg={12} sx={{ mx: 6, my: 10 }}>
                    <Card
                      sx={{
                        borderRadius: 5,
                        backgroundColor: 'rgba(255,255,255, .2)',
                        color: '#fff',
                        fontSize: '15px',
                      }}
                    >
                      <CardHeader
                        sx={{ backgroundColor: '#df00cd', color: 'white' }}
                        title="Contact us"
                        titleTypographyProps={{ variant: 'h4', sx: { ml: 2 } }}
                      ></CardHeader>

                      <form
                        ref={form}
                        onSubmit={formik.handleSubmit}
                        style={{
                          paddingBottom: 40,
                          paddingTop: 40,
                          paddingLeft: 50,
                          paddingRight: 50,
                        }}
                      >
                        <div style={{ marginBottom: 20 }}>
                          <div style={{ marginBottom: '10px' }}>First name</div>
                          <div>
                            <TextField
                              id="firstname"
                              fullWidth
                              name="firstname"
                              value={formik.values.firstname}
                              onChange={formik.handleChange}
                              error={
                                formik.touched.firstname &&
                                Boolean(formik.errors.firstname)
                              }
                              helperText={
                                formik.touched.firstname &&
                                formik.errors.firstname
                              }
                              InputProps={{
                                sx: {
                                  borderRadius: 5,
                                  backgroundColor: 'white',
                                },
                              }}
                            />
                          </div>
                        </div>
                        <div style={{ marginBottom: 20 }}>
                          <div style={{ marginBottom: '10px' }}>Last name</div>
                          <div>
                            <TextField
                              fullWidth
                              id="lastname"
                              name="lastname"
                              value={formik.values.lastname}
                              onChange={formik.handleChange}
                              error={
                                formik.touched.lastname &&
                                Boolean(formik.errors.lastname)
                              }
                              helperText={
                                formik.touched.lastname &&
                                formik.errors.lastname
                              }
                              InputProps={{
                                sx: {
                                  borderRadius: 5,
                                  backgroundColor: 'white',
                                },
                              }}
                            />
                          </div>
                        </div>

                        <div style={{ marginBottom: 20 }}>
                          <div style={{ marginBottom: '10px' }}>
                            Email Address
                          </div>
                          <div>
                            <TextField
                              fullWidth
                              id="email"
                              name="email"
                              value={formik.values.email}
                              onChange={formik.handleChange}
                              error={
                                formik.touched.email &&
                                Boolean(formik.errors.email)
                              }
                              helperText={
                                formik.touched.email && formik.errors.email
                              }
                              InputProps={{
                                sx: {
                                  borderRadius: 5,
                                  backgroundColor: 'white',
                                },
                              }}
                            />
                          </div>
                        </div>
                        <div style={{ marginBottom: 20 }}>
                          <div style={{ marginBottom: '10px' }}>Message</div>
                          <div>
                            <TextField
                              id="message"
                              name="message"
                              value={formik.values.message}
                              onChange={formik.handleChange}
                              error={
                                formik.touched.message &&
                                Boolean(formik.errors.message)
                              }
                              helperText={
                                formik.touched.message && formik.errors.message
                              }
                              InputProps={{
                                sx: {
                                  borderRadius: 5,
                                  height: 100,
                                  backgroundColor: 'white',
                                  alignItems: 'start',
                                },
                              }}
                              fullWidth
                            />
                          </div>
                        </div>
                        <Box textAlign={'center'}>
                          <Button
                            sx={{
                              backgroundColor: '#df00cd',
                              borderRadius: 5,
                              px: 4,
                            }}
                            variant="contained"
                            type="submit"
                            disabled={submitting}
                          >
                            Send
                          </Button>
                        </Box>
                      </form>
                    </Card>
                    <Grid
                      item
                      container
                      direction={'row'}
                      spacing={4}
                      sx={{ mt: 15 }}
                      fontSize={'40px'}
                      justifyContent="center"
                    >
                      <Grid item>
                        <a href="https://www.facebook.com/profile.php?id=100087063916333">
                          <RiFacebookFill fontSize="inherit" />
                        </a>
                      </Grid>
                      <Grid item>
                        {' '}
                        <a href="https://www.linkedin.com/company/the-codebox">
                          <RiLinkedinFill fontSize={'40px'} />
                        </a>
                      </Grid>
                      <Grid item>
                        <a href="https://api.whatsapp.com/send?phone=%2B639952888978&fbclid=IwAR2dJQY_06vI4sYeeHMFcE0qg7u8JHMp-2uiSgZEiHBkMKStoGabBiKnmOE">
                          <WhatsAppIcon fontSize="inherit" />
                        </a>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Base>
            </>
          ) : (
            <>
              {medium ? (
                <>
                  {' '}
                  <Base>
                    <Box
                      component={'img'}
                      sx={{
                        height: 50,
                        width: 200,
                        ml: 2,
                        mt: 2,
                      }}
                      src={logo}
                      alt="codeboxlogo"
                    ></Box>
                    <Grid container direction={'row'}>
                      <Grid
                        xs={12}
                        md={12}
                        lg={12}
                        item
                        container
                        direction={'column'}
                        sx={{ ml: 10, mt: 10 }}
                      >
                        <Grid container item>
                          <Grid item>
                            {' '}
                            <Typography
                              sx={{
                                fontSize: '50px',
                                maxWidth: '250px',
                                lineHeight: 0.9,
                              }}
                            >
                              Get in touch!
                            </Typography>
                          </Grid>
                          <Grid
                            fontSize={'30px'}
                            sx={{ mt: 3 }}
                            container
                            item
                            direction={'row'}
                          >
                            <IoIosMail fontSize="inherit" color="#ef2ef9" />
                            <Typography fontSize="16px" sx={{ pl: 2, pt: 1 }}>
                              info@thecodebox.net
                            </Typography>
                          </Grid>
                          <Grid
                            fontSize={'30px'}
                            container
                            item
                            direction={'row'}
                          >
                            <LocalphoneIcon
                              sx={{ color: '#ef2ef9' }}
                              fontSize="inherit"
                            />
                            <Typography fontSize="16px" sx={{ pl: 2, pt: 1 }}>
                              09260090824
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} md={12} lg={12} sx={{ mx: 5, my: 9 }}>
                        <Card
                          sx={{
                            borderRadius: 5,
                            backgroundColor: 'rgba(255,255,255, .2)',
                            color: '#fff',
                            fontSize: '13px',
                          }}
                        >
                          <CardHeader
                            sx={{ backgroundColor: '#df00cd', color: 'white' }}
                            title="Contact us"
                            titleTypographyProps={{
                              variant: 'h5',
                              sx: { ml: 2 },
                            }}
                          ></CardHeader>

                          <form
                            ref={form}
                            onSubmit={formik.handleSubmit}
                            style={{
                              paddingBottom: 35,
                              paddingTop: 35,
                              paddingLeft: 45,
                              paddingRight: 45,
                            }}
                          >
                            <div style={{ marginBottom: 10 }}>
                              <div style={{ marginBottom: '5px' }}>
                                First name
                              </div>
                              <div>
                                <TextField
                                  id="firstname"
                                  fullWidth
                                  name="firstname"
                                  value={formik.values.firstname}
                                  onChange={formik.handleChange}
                                  error={
                                    formik.touched.firstname &&
                                    Boolean(formik.errors.firstname)
                                  }
                                  helperText={
                                    formik.touched.firstname &&
                                    formik.errors.firstname
                                  }
                                  InputProps={{
                                    sx: {
                                      borderRadius: 5,
                                      backgroundColor: 'white',
                                    },
                                  }}
                                />
                              </div>
                            </div>
                            <div style={{ marginBottom: 10 }}>
                              <div style={{ marginBottom: '5px' }}>
                                Last name
                              </div>
                              <div>
                                <TextField
                                  fullWidth
                                  id="lastname"
                                  name="lastname"
                                  value={formik.values.lastname}
                                  onChange={formik.handleChange}
                                  error={
                                    formik.touched.lastname &&
                                    Boolean(formik.errors.lastname)
                                  }
                                  helperText={
                                    formik.touched.lastname &&
                                    formik.errors.lastname
                                  }
                                  InputProps={{
                                    sx: {
                                      borderRadius: 5,
                                      backgroundColor: 'white',
                                    },
                                  }}
                                />
                              </div>
                            </div>

                            <div style={{ marginBottom: 10 }}>
                              <div style={{ marginBottom: '5px' }}>
                                Email Address
                              </div>
                              <div>
                                <TextField
                                  fullWidth
                                  id="email"
                                  name="email"
                                  value={formik.values.email}
                                  onChange={formik.handleChange}
                                  error={
                                    formik.touched.email &&
                                    Boolean(formik.errors.email)
                                  }
                                  helperText={
                                    formik.touched.email && formik.errors.email
                                  }
                                  InputProps={{
                                    sx: {
                                      borderRadius: 5,
                                      backgroundColor: 'white',
                                    },
                                  }}
                                />
                              </div>
                            </div>
                            <div style={{ marginBottom: 10 }}>
                              <div style={{ marginBottom: '5px' }}>Message</div>
                              <div>
                                <TextField
                                  id="message"
                                  name="message"
                                  value={formik.values.message}
                                  onChange={formik.handleChange}
                                  error={
                                    formik.touched.message &&
                                    Boolean(formik.errors.message)
                                  }
                                  helperText={
                                    formik.touched.message &&
                                    formik.errors.message
                                  }
                                  InputProps={{
                                    sx: {
                                      borderRadius: 5,
                                      height: 100,
                                      backgroundColor: 'white',
                                      alignItems: 'start',
                                    },
                                  }}
                                  fullWidth
                                />
                              </div>
                            </div>
                            <Box textAlign={'center'}>
                              <Button
                                sx={{
                                  backgroundColor: '#df00cd',
                                  borderRadius: 5,
                                  px: 4,
                                }}
                                variant="contained"
                                type="submit"
                                disabled={submitting}
                              >
                                Send
                              </Button>
                            </Box>
                          </form>
                        </Card>
                        <Grid
                          item
                          container
                          direction={'row'}
                          spacing={4}
                          sx={{ mt: 15 }}
                          fontSize={'40px'}
                          justifyContent="center"
                        >
                          <Grid item>
                            <a href="https://www.facebook.com/profile.php?id=100087063916333">
                              <RiFacebookFill fontSize="inherit" />
                            </a>
                          </Grid>
                          <Grid item>
                            {' '}
                            <a href="https://www.linkedin.com/company/the-codebox">
                              <RiLinkedinFill fontSize={'40px'} />
                            </a>
                          </Grid>
                          <Grid item>
                            <a href="https://api.whatsapp.com/send?phone=%2B639952888978&fbclid=IwAR2dJQY_06vI4sYeeHMFcE0qg7u8JHMp-2uiSgZEiHBkMKStoGabBiKnmOE">
                              <WhatsAppIcon fontSize="inherit" />
                            </a>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Base>
                </>
              ) : (
                <>
                  {' '}
                  <Base>
                    <Box
                      component={'img'}
                      sx={{
                        height: 50,
                        width: 200,
                        ml: 2,
                        mt: 2,
                      }}
                      src={logo}
                      alt="codeboxlogo"
                    ></Box>
                    <Grid container direction={'row'}>
                      <Grid
                        xs={12}
                        md={12}
                        lg={12}
                        item
                        container
                        direction={'column'}
                        sx={{ ml: 5, mt: 5 }}
                      >
                        <Grid container item>
                          <Grid item>
                            {' '}
                            <Typography
                              sx={{
                                fontSize: '40px',
                                maxWidth: '200px',
                                lineHeight: 0.9,
                              }}
                            >
                              Get in touch!
                            </Typography>
                          </Grid>
                          <Grid
                            fontSize={'24px'}
                            sx={{ mt: 5 }}
                            container
                            item
                            direction={'row'}
                          >
                            <IoIosMail fontSize="inherit" color="#ef2ef9" />
                            <Typography fontSize="14px" sx={{ pl: 2, pt: 1 }}>
                              info@thecodebox.net
                            </Typography>
                          </Grid>
                          <Grid
                            fontSize={'24px'}
                            container
                            item
                            direction={'row'}
                          >
                            <LocalphoneIcon
                              sx={{ color: '#ef2ef9' }}
                              fontSize="inherit"
                            />
                            <Typography fontSize="14px" sx={{ pl: 2, pt: 1 }}>
                              09260090824
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} md={12} lg={12} sx={{ mx: 3, my: 7 }}>
                        <Card
                          sx={{
                            borderRadius: 5,
                            backgroundColor: 'rgba(255,255,255, .2)',
                            color: '#fff',
                            fontSize: '11px',
                          }}
                        >
                          <CardHeader
                            sx={{ backgroundColor: '#df00cd', color: 'white' }}
                            title="Contact us"
                            titleTypographyProps={{
                              variant: 'h6',
                              sx: { ml: 2 },
                            }}
                          ></CardHeader>

                          <form
                            ref={form}
                            onSubmit={formik.handleSubmit}
                            style={{
                              paddingBottom: 20,
                              paddingTop: 20,
                              paddingLeft: 25,
                              paddingRight: 25,
                            }}
                          >
                            <div style={{ marginBottom: 8 }}>
                              <div style={{ marginBottom: '3px' }}>
                                First name
                              </div>
                              <div>
                                <TextField
                                  id="firstname"
                                  fullWidth
                                  name="firstname"
                                  value={formik.values.firstname}
                                  onChange={formik.handleChange}
                                  error={
                                    formik.touched.firstname &&
                                    Boolean(formik.errors.firstname)
                                  }
                                  helperText={
                                    formik.touched.firstname &&
                                    formik.errors.firstname
                                  }
                                  InputProps={{
                                    sx: {
                                      borderRadius: 5,
                                      backgroundColor: 'white',
                                    },
                                  }}
                                />
                              </div>
                            </div>
                            <div style={{ marginBottom: 8 }}>
                              <div style={{ marginBottom: '3px' }}>
                                Last name
                              </div>
                              <div>
                                <TextField
                                  fullWidth
                                  id="lastname"
                                  name="lastname"
                                  value={formik.values.lastname}
                                  onChange={formik.handleChange}
                                  error={
                                    formik.touched.lastname &&
                                    Boolean(formik.errors.lastname)
                                  }
                                  helperText={
                                    formik.touched.lastname &&
                                    formik.errors.lastname
                                  }
                                  InputProps={{
                                    sx: {
                                      borderRadius: 5,
                                      backgroundColor: 'white',
                                    },
                                  }}
                                />
                              </div>
                            </div>

                            <div style={{ marginBottom: 8 }}>
                              <div style={{ marginBottom: '3px' }}>
                                Email Address
                              </div>
                              <div>
                                <TextField
                                  fullWidth
                                  id="email"
                                  name="email"
                                  value={formik.values.email}
                                  onChange={formik.handleChange}
                                  error={
                                    formik.touched.email &&
                                    Boolean(formik.errors.email)
                                  }
                                  helperText={
                                    formik.touched.email && formik.errors.email
                                  }
                                  InputProps={{
                                    sx: {
                                      borderRadius: 5,
                                      backgroundColor: 'white',
                                    },
                                  }}
                                />
                              </div>
                            </div>
                            <div style={{ marginBottom: 8 }}>
                              <div style={{ marginBottom: '3px' }}>Message</div>
                              <div>
                                <TextField
                                  id="message"
                                  name="message"
                                  value={formik.values.message}
                                  onChange={formik.handleChange}
                                  error={
                                    formik.touched.message &&
                                    Boolean(formik.errors.message)
                                  }
                                  helperText={
                                    formik.touched.message &&
                                    formik.errors.message
                                  }
                                  InputProps={{
                                    sx: {
                                      borderRadius: 5,
                                      height: 100,
                                      backgroundColor: 'white',
                                      alignItems: 'start',
                                    },
                                  }}
                                  fullWidth
                                />
                              </div>
                            </div>
                            <Box textAlign={'center'}>
                              <Button
                                sx={{
                                  backgroundColor: '#df00cd',
                                  borderRadius: 5,
                                  px: 4,
                                }}
                                variant="contained"
                                type="submit"
                                disabled={submitting}
                              >
                                Send
                              </Button>
                            </Box>
                          </form>
                        </Card>
                        <Grid
                          item
                          container
                          direction={'row'}
                          spacing={3}
                          sx={{ mt: 15 }}
                          fontSize={'35px'}
                          justifyContent="center"
                        >
                          <Grid item>
                            <a href="https://www.facebook.com/profile.php?id=100087063916333">
                              <RiFacebookFill fontSize="inherit" />
                            </a>
                          </Grid>
                          <Grid item>
                            {' '}
                            <a href="https://www.linkedin.com/company/the-codebox">
                              <RiLinkedinFill fontSize={'35px'} />
                            </a>
                          </Grid>
                          <Grid item>
                            <a href="https://api.whatsapp.com/send?phone=%2B639952888978&fbclid=IwAR2dJQY_06vI4sYeeHMFcE0qg7u8JHMp-2uiSgZEiHBkMKStoGabBiKnmOE">
                              <WhatsAppIcon fontSize="inherit" />
                            </a>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Base>
                </>
              )}
            </>
          )}
        </>
      )}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default LandingPage;
