-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2024 at 09:08 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `movieprojectdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `casts`
--

CREATE TABLE `casts` (
  `id` int(11) NOT NULL,
  `movieId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `name` varchar(120) NOT NULL,
  `url` varchar(255) NOT NULL,
  `characterName` varchar(120) NOT NULL,
  `dateCreated` timestamp NOT NULL DEFAULT current_timestamp(),
  `dateUpdated` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `tmdbId` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `overview` text NOT NULL,
  `popularity` float NOT NULL,
  `releaseDate` date NOT NULL,
  `voteAverage` float NOT NULL,
  `backdropPath` varchar(255) NOT NULL,
  `posterPath` varchar(255) NOT NULL,
  `isFeatured` tinyint(1) NOT NULL DEFAULT 0,
  `dateCreated` timestamp NOT NULL DEFAULT current_timestamp(),
  `dateUpdated` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `userId`, `tmdbId`, `title`, `overview`, `popularity`, `releaseDate`, `voteAverage`, `backdropPath`, `posterPath`, `isFeatured`, `dateCreated`, `dateUpdated`) VALUES
(7, 2, 10191, 'How to Train Your Dragon', 'As the son of a Viking leader on the cusp of manhood, shy Hiccup Horrendous Haddock III faces a rite of passage: he must kill a dragon to prove his warrior mettle. But after downing a feared dragon, he realizes that he no longer wants to destroy it, and instead befriends the beast – which he names Toothless – much to the chagrin of his warrior father.', 325.325, '2010-03-18', 7.83, 'https://image.tmdb.org/t/p/original/undefined', 'https://image.tmdb.org/t/p/original//92olhXYaIX6lvB8jwFz4OSfPaKq.jpg', 0, '2024-11-26 02:10:40', '0000-00-00 00:00:00'),
(8, 2, 82702, 'How to Train Your Dragon 2', 'Five years have passed since Hiccup and Toothless united the dragons and Vikings of Berk. Now, they spend their time charting unmapped territories. During one of their adventures, the pair discover a secret cave that houses hundreds of wild dragons -- and a mysterious dragon rider who turns out to be Hiccup\'s mother, Valka. Hiccup and Toothless then find themselves at the center of a battle to protect Berk from a power-hungry warrior named Drago.', 214.901, '2014-06-05', 7.7, 'https://image.tmdb.org/t/p/original/undefined', 'https://image.tmdb.org/t/p/original//d13Uj86LdbDLrfDoHR5aDOFYyJC.jpg', 0, '2024-11-26 02:11:00', '0000-00-00 00:00:00'),
(9, 2, 166428, 'How to Train Your Dragon: The Hidden World', 'As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.', 218.132, '2019-01-03', 7.8, 'https://image.tmdb.org/t/p/original/undefined', 'https://image.tmdb.org/t/p/original//xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg', 0, '2024-11-26 02:11:21', '0000-00-00 00:00:00'),
(10, 2, 129, 'Spirited Away', 'A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.', 116.918, '2001-07-20', 8.5, 'https://image.tmdb.org/t/p/original/undefined', 'https://image.tmdb.org/t/p/original//39wmItIWsg5sZMyRUHLkWBcuVCM.jpg', 0, '2024-11-26 02:11:44', '0000-00-00 00:00:00'),
(11, 2, 862, 'Toy Story', 'Led by Woody, Andy\'s toys live happily in his room until Andy\'s birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy\'s heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.', 157.532, '1995-10-30', 7.97, 'https://image.tmdb.org/t/p/original/undefined', 'https://image.tmdb.org/t/p/original//uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg', 0, '2024-11-26 02:12:04', '0000-00-00 00:00:00'),
(12, 2, 14160, 'Up', 'Carl Fredricksen spent his entire life dreaming of exploring the globe and experiencing life to its fullest. But at age 78, life seems to have passed him by, until a twist of fate (and a persistent 8-year old Wilderness Explorer named Russell) gives him a new lease on life.', 93.423, '2009-05-28', 8, 'https://image.tmdb.org/t/p/original/undefined', 'https://image.tmdb.org/t/p/original//mFvoEwSfLqbcWwFsDjQebn9bzFe.jpg', 0, '2024-11-26 02:12:42', '0000-00-00 00:00:00'),
(13, 2, 8392, 'My Neighbor Totoro', 'Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.', 52.762, '1988-04-16', 8.068, 'https://image.tmdb.org/t/p/original/undefined', 'https://image.tmdb.org/t/p/original//rtGDOeG9LzoerkDGZF9dnVeLppL.jpg', 0, '2024-11-26 02:13:01', '0000-00-00 00:00:00'),
(14, 2, 12, 'Finding Nemo', 'Nemo, an adventurous young clownfish, is unexpectedly taken from his Great Barrier Reef home to a dentist\'s office aquarium. It\'s up to his worrisome father Marlin and a friendly but forgetful fish Dory to bring Nemo home -- meeting vegetarian sharks, surfer dude turtles, hypnotic jellyfish, hungry seagulls, and more along the way.', 112.525, '2003-05-30', 7.8, 'https://image.tmdb.org/t/p/original/undefined', 'https://image.tmdb.org/t/p/original//eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg', 0, '2024-11-26 02:13:10', '0000-00-00 00:00:00'),
(15, 2, 585, 'Monsters, Inc.', 'Lovable Sulley and his wisecracking sidekick Mike Wazowski are the top scare team at Monsters, Inc., the scream-processing factory in Monstropolis. When a little girl named Boo wanders into their world, it\'s the monsters who are scared silly, and it\'s up to Sulley and Mike to keep her out of sight and get her back home.', 123.646, '2001-11-01', 7.845, 'https://image.tmdb.org/t/p/original/undefined', 'https://image.tmdb.org/t/p/original//wFSpyMsp7H0ttERbxY7Trlv8xry.jpg', 0, '2024-11-26 02:13:21', '0000-00-00 00:00:00'),
(16, 2, 9806, 'The Incredibles', 'Bob Parr has given up his superhero days to log in time as an insurance adjuster and raise his three children with his formerly heroic wife in suburbia. But when he receives a mysterious assignment, it\'s time to get back into costume.', 82.934, '2004-10-27', 7.7, 'https://image.tmdb.org/t/p/original//se5Hxz7PArQZOG3Nx2bpfOhLhtV.jpg', 'https://image.tmdb.org/t/p/original//2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg', 0, '2024-11-26 02:13:40', '0000-00-00 00:00:00'),
(17, 2, 2062, 'Ratatouille', 'Remy, a resident of Paris, appreciates good food and has quite a sophisticated palate. He would love to become a chef so he can create and enjoy culinary masterpieces to his heart\'s delight. The only problem is, Remy is a rat. When he winds up in the sewer beneath one of Paris\' finest restaurants, the rodent gourmet finds himself ideally placed to realize his dream.', 125.396, '2007-06-21', 7.8, 'https://image.tmdb.org/t/p/original//xgDj56UWyeWQcxQ44f5A3RTWuSs.jpg', 'https://image.tmdb.org/t/p/original//t3vaWRPSf6WjDSamIkKDs1iQWna.jpg', 0, '2024-11-26 02:13:56', '0000-00-00 00:00:00'),
(18, 2, 177572, 'Big Hero 6', 'A special bond develops between plus-sized inflatable robot Baymax, and prodigy Hiro Hamada, who team up with a group of friends to form a band of high-tech heroes.', 156.671, '2014-10-24', 7.732, 'https://image.tmdb.org/t/p/original//4s2d3xdyqotiVNHTlTlJjrr3q0H.jpg', 'https://image.tmdb.org/t/p/original//2mxS4wUimwlLmI1xp6QW6NSU361.jpg', 0, '2024-11-26 02:14:11', '0000-00-00 00:00:00'),
(19, 2, 808, 'Shrek', 'It ain\'t easy bein\' green -- especially if you\'re a likable (albeit smelly) ogre named Shrek. On a mission to retrieve a gorgeous princess from the clutches of a fire-breathing dragon, Shrek teams up with an unlikely compatriot -- a wisecracking donkey.', 209.637, '2001-05-18', 7.7, 'https://image.tmdb.org/t/p/original/undefined', 'https://image.tmdb.org/t/p/original//iB64vpL3dIObOtMZgX3RqdVdQDc.jpg', 0, '2024-11-26 02:14:21', '0000-00-00 00:00:00'),
(20, 2, 38757, 'Tangled', 'Feisty teenager Rapunzel, who has long and magical hair, wants to go and see sky lanterns on her eighteenth birthday, but she\'s bound to a tower by her overprotective mother. She strikes a deal with Flynn Rider, a charming wanted thief, and the duo set off on an action-packed escapade.', 151.638, '2010-11-24', 7.6, 'https://image.tmdb.org/t/p/original//cWczNud8Y8i8ab0Z4bxos4myWYO.jpg', 'https://image.tmdb.org/t/p/original//ym7Kst6a4uodryxqbGOxmewF235.jpg', 0, '2024-11-26 02:14:30', '0000-00-00 00:00:00'),
(21, 2, 10315, 'Fantastic Mr. Fox', 'The Fantastic Mr. Fox, bored with his current life, plans a heist against the three local farmers. The farmers, tired of sharing their chickens with the sly fox, seek revenge against him and his family.', 31.577, '2009-10-23', 7.806, 'https://image.tmdb.org/t/p/original//qU4HDNKv7gjdlvMu74r70rISPwn.jpg', 'https://image.tmdb.org/t/p/original//t5v2Zsb5sa6PSP9jMUWY4GdIb3c.jpg', 0, '2024-11-26 02:15:06', '0000-00-00 00:00:00'),
(22, 2, 3170, 'Bambi', 'Bambi\'s tale unfolds from season to season as the young prince of the forest learns about life, love, and friends.', 52.576, '1942-02-11', 7, 'https://image.tmdb.org/t/p/original//1ZKHzSGJm0kvlCp4echAOtKnDTm.jpg', 'https://image.tmdb.org/t/p/original//wV9e2y4myJ4KMFsyFfWYcUOawyK.jpg', 0, '2024-11-26 02:16:46', '0000-00-00 00:00:00'),
(23, 2, 3933, 'Corpse Bride', 'In a 19th-century European village, a young man about to be married is whisked away to the underworld and wed to a mysterious corpse bride, while his real bride waits bereft in the land of the living.', 202.356, '2005-09-12', 7.58, 'https://image.tmdb.org/t/p/original//v23fWgJUEt8EMmvn19btIacxP8E.jpg', 'https://image.tmdb.org/t/p/original//isb2Qow76GpqYmsSyfdMfsYAjts.jpg', 0, '2024-11-26 02:17:00', '0000-00-00 00:00:00'),
(24, 2, 11360, 'Dumbo', 'Dumbo is a baby elephant born with over-sized ears and a supreme lack of confidence. But thanks to his even more diminutive buddy Timothy the Mouse,  the pint-sized pachyderm learns to surmount all obstacles.', 50.581, '1941-10-31', 7, 'https://image.tmdb.org/t/p/original//kU7edebg3MYD6Ec0D5tpiT5ztDq.jpg', 'https://image.tmdb.org/t/p/original//2MOI6Zcw99uv4K22Is5S9LxBkDD.jpg', 0, '2024-11-26 02:17:18', '0000-00-00 00:00:00'),
(25, 2, 10674, 'Mulan', 'To save her father from certain death in the army, a young woman secretly enlists in his place and becomes one of China\'s greatest heroines in the process.', 92.164, '1998-06-18', 7.91, 'https://image.tmdb.org/t/p/original//4QGYY03fzXdynJd51iy2dWQfon1.jpg', 'https://image.tmdb.org/t/p/original//5TYgKxYhnhRNNwqnRAKHkgfqi2G.jpg', 0, '2024-11-26 02:17:39', '0000-00-00 00:00:00'),
(26, 2, 62177, 'Brave', 'Brave is set in the mystical Scottish Highlands, where Mérida is the princess of a kingdom ruled by King Fergus and Queen Elinor. An unruly daughter and an accomplished archer, Mérida one day defies a sacred custom of the land and inadvertently brings turmoil to the kingdom. In an attempt to set things right, Mérida seeks out an eccentric old Wise Woman and is granted an ill-fated wish. Also figuring into Mérida’s quest — and serving as comic relief — are the kingdom’s three lords: the enormous Lord MacGuffin, the surly Lord Macintosh, and the disagreeable Lord Dingwall.', 69.52, '2012-06-21', 7, 'https://image.tmdb.org/t/p/original//esIwzihCKlyqT6AjdI3q6WdSi5u.jpg', 'https://image.tmdb.org/t/p/original//1XAuDtMWpL0sYSFK0R6EZate2Ux.jpg', 0, '2024-11-26 02:17:47', '0000-00-00 00:00:00'),
(27, 2, 11688, 'The Emperor\'s New Groove', 'When self-centered Emperor Kuzco is turned into a llama by his scheming advisor, he is forced to rely on good-hearted peasant Pacha to get back home.', 98.213, '2000-12-15', 7.6, 'https://image.tmdb.org/t/p/original/undefined', 'https://image.tmdb.org/t/p/original//wwbgkXQBEKtnyIJapk6gUgWkVw8.jpg', 0, '2024-11-26 02:18:17', '0000-00-00 00:00:00'),
(28, 2, 62214, 'Frankenweenie', 'When a car hits young Victor\'s pet dog Sparky, Victor decides to bring him back to life the only way he knows how. But when the bolt-necked \"monster\" wreaks havoc and terror in the hearts of Victor\'s neighbors, he has to convince them that Sparky\'s still the good, loyal friend he was.', 33.4, '2012-10-04', 7, 'https://image.tmdb.org/t/p/original//yfTZ2MSRWc06cBrFOsAF4Lebi4.jpg', 'https://image.tmdb.org/t/p/original//yGjVbLVdZRBlZTTQVBsj2KUjL1s.jpg', 0, '2024-11-26 02:21:43', '0000-00-00 00:00:00'),
(29, 2, 13053, 'Bolt', 'Bolt is the star of the biggest show in Hollywood. The only problem is, he thinks it\'s real. After he\'s accidentally shipped to New York City and separated from Penny, his beloved co-star and owner, Bolt must harness all his \"super powers\" to find a way home.', 40.421, '2008-11-21', 6.518, 'https://image.tmdb.org/t/p/original//uWIyXlBRwW2MIBcBysj50A9nv7D.jpg', 'https://image.tmdb.org/t/p/original//z9VHoUcZ1GiH3f3qYz7Me7Zc1Fd.jpg', 0, '2024-11-26 02:21:52', '0000-00-00 00:00:00'),
(30, 2, 11544, 'Lilo & Stitch', 'As Stitch, a runaway genetic experiment from a faraway planet, wreaks havoc on the Hawaiian Islands, he becomes the mischievous adopted alien \"puppy\" of an independent little girl named Lilo and learns about loyalty, friendship, and ʻohana, the Hawaiian tradition of family.', 78.977, '2002-06-21', 7.5, 'https://image.tmdb.org/t/p/original/undefined', 'https://image.tmdb.org/t/p/original//m13Vbzv7R2GMAl3GXFrkmMEgCFQ.jpg', 0, '2024-11-26 02:22:05', '0000-00-00 00:00:00'),
(31, 2, 11970, 'Hercules', 'Bestowed with superhuman strength, a young mortal named Hercules sets out to prove himself a hero in the eyes of his father, the great god Zeus. Along with his friends Pegasus, a flying horse, and Phil, a personal trainer, Hercules is tricked by the hilarious, hotheaded villain Hades, who\'s plotting to take over Mount Olympus!', 83.14, '1997-06-13', 7.503, 'https://image.tmdb.org/t/p/original//iF2ibHWAkMBCEKEB93B5wY39vCB.jpg', 'https://image.tmdb.org/t/p/original//dK9rNoC97tgX3xXg5zdxFisdfcp.jpg', 0, '2024-11-26 02:22:16', '0000-00-00 00:00:00'),
(32, 2, 46195, 'Rio', 'Captured by smugglers when he was just a hatchling, a macaw named Blu never learned to fly and lives a happily domesticated life in Minnesota with his human friend, Linda. Blu is thought to be the last of his kind, but when word comes that Jewel, a lone female, lives in Rio de Janeiro, Blu and Linda go to meet her. Animal smugglers kidnap Blu and Jewel, but the pair soon escape and begin a perilous adventure back to freedom -- and Linda.', 72.807, '2011-04-03', 6.7, 'https://image.tmdb.org/t/p/original//yoyLhm534GHsWvx5cNBDhfZdTG7.jpg', 'https://image.tmdb.org/t/p/original//4nJxhUknKV8Gqdhov8pU1YWDYfb.jpg', 0, '2024-11-26 02:22:27', '0000-00-00 00:00:00'),
(33, 2, 10198, 'The Princess and the Frog', 'A waitress, desperate to fulfill her dreams as a restaurant owner, is set on a journey to turn a frog prince back into a human being, but she has to face the same problem after she kisses him.', 87.949, '2009-12-08', 7.213, 'https://image.tmdb.org/t/p/original//z62CBlBBBOoNUuuxZ1jMAcq5ARE.jpg', 'https://image.tmdb.org/t/p/original//v6nAUs62OJ4DXmnnmPFeVmMz8H9.jpg', 0, '2024-11-26 02:22:44', '0000-00-00 00:00:00'),
(35, 2, 9297, 'Monster House', 'Monsters under the bed are scary enough, but what happens when an entire house is out to get you? Three teens aim to find out when they go up against a decrepit neighboring home and unlock its frightening secrets.', 41.653, '2006-06-30', 6.7, 'https://image.tmdb.org/t/p/original/undefined', 'https://image.tmdb.org/t/p/original//r4BrEpGD2OlOTHvVwy0lXzxAGqs.jpg', 0, '2024-11-26 02:24:37', '0000-00-00 00:00:00'),
(36, 2, 77174, 'ParaNorman', 'In the town of Blithe Hollow, Norman Babcock can speak to the dead, but no one other than his eccentric new friend believes his ability is real. One day, Norman\'s eccentric uncle tells him of a ritual he must perform to protect the town from a curse cast by a witch centuries ago.', 29.078, '2012-08-03', 7, 'https://image.tmdb.org/t/p/original/undefined', 'https://image.tmdb.org/t/p/original//9DZPtuYTKYxt6vzHvZ5FLThG4fl.jpg', 0, '2024-11-26 02:24:49', '0000-00-00 00:00:00'),
(37, 2, 227973, 'The Peanuts Movie', 'Snoopy embarks upon his greatest mission as he and his team take to the skies to pursue their arch-nemesis, while his best pal Charlie Brown begins his own epic quest.', 23.93, '2015-11-05', 6.915, 'https://image.tmdb.org/t/p/original/undefined', 'https://image.tmdb.org/t/p/original//dZOcwqxurYhDyjmdnhYcGnn1agL.jpg', 0, '2024-11-26 02:25:14', '0000-00-00 00:00:00'),
(38, 2, 592983, 'Spellbound', 'When a powerful spell turns her parents into giant monsters, a teenage princess must journey into the wild to reverse the curse before it\'s too late.', 1176.26, '2024-11-22', 6.6, 'https://image.tmdb.org/t/p/original/undefined', 'https://image.tmdb.org/t/p/original//xFSIygDiX70Esp9dheCgGX0Nj77.jpg', 0, '2024-11-29 14:07:32', '0000-00-00 00:00:00'),
(39, 2, 1184918, 'The Wild Robot', 'After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island\'s animals and cares for an orphaned baby goose.', 1294.12, '2024-09-12', 8.403, 'https://image.tmdb.org/t/p/original/undefined', 'https://image.tmdb.org/t/p/original//wTnV3PCVW5O92JMrFvvrRcV39RU.jpg', 0, '2024-12-04 13:39:44', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `photos`
--

CREATE TABLE `photos` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `movieId` int(11) NOT NULL,
  `url` int(11) NOT NULL,
  `description` int(11) NOT NULL,
  `dateCreated` timestamp NOT NULL DEFAULT current_timestamp(),
  `dateUpdated` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstName` varchar(128) NOT NULL,
  `middleName` varchar(128) NOT NULL,
  `lastName` varchar(128) NOT NULL,
  `contactNo` varchar(15) NOT NULL,
  `role` enum('admin','user') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `firstName`, `middleName`, `lastName`, `contactNo`, `role`) VALUES
(1, 'test@mail.com', '5f4dcc3b5aa765d61d8327deb882cf99', 'string', 'string', 'string', 'string', 'user'),
(2, 'reanneashleymatia@gmail.com', '0ae892f59eaea679cee354f4351b29cc', 'Reanne', 'Ashley', 'Matias', '123456789', 'admin'),
(3, 'starosamatias@gmail.com', '5f4dcc3b5aa765d61d8327deb882cf99', 'Ashley', 'Ree', 'Matias', '1234567890', 'admin'),
(6, 'adminuser@mail.com', 'c93ccd78b2076528346216b3b2f701e6', 'useradmin', 'adminmid', 'adminlast', '098839762', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE `videos` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `movieId` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `dateCreated` timestamp NOT NULL DEFAULT current_timestamp(),
  `dateUpdated` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `casts`
--
ALTER TABLE `casts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `casts`
--
ALTER TABLE `casts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `photos`
--
ALTER TABLE `photos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `videos`
--
ALTER TABLE `videos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
