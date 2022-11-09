import { Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { minHeight } from '@mui/system';
import Background from './startPage.png';
import logo from './codeBoxLogo.png';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import useMatchMedia from 'use-match-media-hook';

const queries = ['(max-width: 400px)', '(min-width: 800px)'];

const Base = styled('div')({
  color: 'white',
  backgroundImage: `url(${Background})`,
  minHeight: '100vh',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
});

const StartPage = () => {
  const navigate = useNavigate();
  const [mobile, desktop] = useMatchMedia(queries);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        when: 'beforeChildren',
      },
    },
  };

  const childVariants = {
    hidden: {
      y: '-100vh',
    },
    visible: {
      y: 0,
      transition: {
        type: 'spring',
        delay: 0.5,
        stiffness: 100,
        mass: 0.4,
        damping: 15,
      },
    },
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <Base>
        {desktop ? (
          <>
            {' '}
            <Box
              component={motion.div}
              sx={{ minHeight: '100vh' }}
              justifyContent={'center'}
              alignItems={'center'}
              display={'flex'}
              variants={childVariants}
            >
              <Box textAlign={'center'}>
                <Box
                  sx={{
                    height: 233,
                    width: 350,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                  }}
                  component={'img'}
                  src={logo}
                  alt="codebox logo"
                />

                <Typography color={'white'} fontFamily={'Poppins'}>
                  Getting dev sh*t done
                </Typography>
                <Box sx={{ mt: 5 }}>
                  <Button
                    variant="contained"
                    onClick={() => {
                      navigate('/landing');
                    }}
                    component={motion.div}
                    sx={{ backgroundColor: '#df00cd', borderRadius: 5, px: 4 }}
                    whileHover={{
                      scale: 1.2,
                      textShadow: '0px 0px 8px rgb(255,255,255)',
                      boxShadow: '0px 0px 8px rgb(255,255,255)',
                      transition: {
                        repeat: Infinity,
                        duration: 0.8,
                      },
                    }}
                  >
                    Explore
                  </Button>
                </Box>
              </Box>
            </Box>
          </>
        ) : (
          <>
            <Box
              sx={{ minHeight: '100vh' }}
              justifyContent={'center'}
              alignItems={'center'}
              display={'flex'}
            >
              <Box textAlign={'center'}>
                <Box
                  sx={{
                    height: 233,
                    width: 350,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 300, md: 200 },
                  }}
                  component={'img'}
                  src={logo}
                  alt="codebox logo"
                />

                <Typography color={'white'} fontFamily={'Poppins'}>
                  Getting dev sh*t done
                </Typography>
                <Box sx={{ mt: 5 }}>
                  <Button
                    variant="contained"
                    onClick={() => {
                      navigate('/landing');
                    }}
                    component={motion.div}
                    sx={{ backgroundColor: '#df00cd', borderRadius: 5, px: 4 }}
                    whileHover={{
                      scale: 1.2,
                      textShadow: '0px 0px 8px rgb(255,255,255)',
                      boxShadow: '0px 0px 8px rgb(255,255,255)',
                      transition: {
                        repeat: Infinity,
                        duration: 0.8,
                      },
                    }}
                  >
                    Explore
                  </Button>
                </Box>
              </Box>
            </Box>
          </>
        )}
      </Base>
    </motion.div>
  );
};

export default StartPage;
